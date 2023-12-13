import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import mongoose from "mongoose";
import { DBcon } from "@/app/lib/dbconnection";
import { snupModel } from "@/app/lib/model/signupModel";
import bcrypt from "bcryptjs";



export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),

    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.

      credentials: {

        Username: { label: "Username", type: "text", placeholder: "jsmith" },
        Password: { label: "Password", type: "password" },

      },

      async authorize(credentials) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)

        await mongoose.connect(DBcon);

        try {

          const user = await snupModel.findOne({Username: credentials.Username});

          const bypassword = await bcrypt.compare(credentials.Password, user.Password);
  
          if(user){
            if(bypassword){
  
              console.log(user);
              return user;
              
            }
            else{
  
              console.log("Incorrect Password");
              return null;
            }
  
          }else{
              console.log("both things are wrong")
              return null;
            }
          
        } catch (error) {
          throw new Error(error);
        }
 
}
    })
  
  
  
    // ...add more providers here
  ],

  // pages: {
  //   signIn: '/Login',
  // },
  
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }