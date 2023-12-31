
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { authOptions } from '../api/auth/[...nextauth]/route'
import MySignUp from '../components/MySignUp'



const Page = async () => {


  // using server session

  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/Login?callbackUrl=/profile')
  }
  return (

    <section className='py-24'>
      <div className='container'>
        <h1 className='text-2xl font-bold'>Profile</h1>
      </div>

      <h5>{session.user.name}</h5><br></br>
      <h5>{session.user.email}</h5><br></br>
      <img src={session.user.image} />
      <MySignUp />

      {console.log(session.user)}

    </section>

  )
}

export default Page