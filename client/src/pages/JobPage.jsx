import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify'

const JobPage = ({deleteJob}) => {
  const navigate = useNavigate()
    const {id} = useParams()
    const job = useLoaderData()

    const onDeleteClick = (jobId) => {
      const confirm = window.confirm('Are you sure you want to delete this job?')

      if (!confirm) return;

      deleteJob(jobId);

      toast.success('Job Deleted Successfully')

      navigate('/jobs')
    }

    return (
        <>
           <section>
      <div className="container m-auto py-6 px-6">
        <Link
          to="/jobs"
          className="text-slate-500 hover:text-slate-600 flex items-center">
          <FaArrowLeft className='mr-2' /> Back to Job Listings
        </Link>
      </div>
    </section>

    <section className="bg-slate-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
              <div className="text-gray-500 mb-4">{job.type}</div>
              <h1 className="text-3xl font-bold mb-4">
                {job.title}
              </h1>
              <div
                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                <FaMapMarker className='mr-1 text-black' />
                <p className="text-black">{job.location}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-slate-800 text-lg font-bold mb-6">
                Job Description
              </h3>

              <p className="mb-4">
               {job.description}
              </p>

              <h3 className="text-slate-800 text-lg font-bold mb-2">Salary</h3>

              <p className="mb-4">{job.salary}</p>
            </div>
          </main>

          
          <aside>
           
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Company Info</h3>

              <h2 className="text-2xl">{job.companyName}</h2>

              <p className="my-2">
                {job.companyDescription}
              </p>

              <hr className="my-4" />

              <h3 className="text-xl">Contact Email:</h3>

              <p className="my-2 bg-slate-100 p-2 font-bold">
                {job.companyEmail}
              </p>

              <h3 className="text-xl">Contact Phone:</h3>

              <p className="my-2 bg-slate-100 p-2 font-bold">{job.companyPhone}</p>
            </div>

           
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-bold mb-6">Manage Job</h3>
              <Link
                to={`/edit-jobs/${job._id}`} //Maybe change this
                className="bg-slate-500 hover:bg-slate-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Job</Link>
              <button onClick={ () => onDeleteClick(job._id) }className="bg-slate-900 hover:bg-black text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
                Delete Job
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
        </>
    )
}

const jobLoader = async ({params}) => {
  // const res = await fetch(`/api/jobs/${params.id}`)
  const res = await fetch(`http://localhost:1212/job/${params.id}`) //maybe change this
  const data = await res.json()
  console.log('working bro')
  return data
}

export {JobPage as default, jobLoader}
