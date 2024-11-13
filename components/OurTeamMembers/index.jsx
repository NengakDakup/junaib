import { teamMembers } from "@/data/teamMembers"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

function OurTeamMembers() {
    const team = teamMembers

  return (
    <div className="container relative lg:mt-30 mt-24" style={{paddingBottom: "80px"}}>
      <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
        <div className="md:col-span-5">
          <div className="relative">
            <img
              src="/assets/images/abdulbasit.jpg"
              className="rounded-xl shadow-md"
              alt=""
            />
            
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="lg:ms-4">
            <h4 className="md:text-3xl text-2xl font-semibold">
                Abdulbasit Ohiare.
            </h4>
            <h4 className="md:text-xl text-xl font-semibold">
                Founder CEO.
            </h4>
            <p className="text-slate-400 max-w-xl mt-4">
              At Junab Realty, we take pride in being your trusted partner in
              the world of real estate. With a passion for connecting people
              with their dream homes and investment opportunities, we are
              dedicated to providing unparalleled service in the vibrant city of
              Abuja
            </p>
            <div className="mt-4 flex gap-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{width: 40, height: 40, marginRight: 10}} className="inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-gray-300 text-slate-400 hover:border-green-600 hover:text-white hover:bg-green-600">
                <i className="mdi mdi-linkedin"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{width: 40, height: 40, marginRight: 10}} className="inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-gray-300 text-slate-400 hover:border-green-600 hover:text-white hover:bg-green-600">
                <i className="mdi mdi-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{width: 40, height: 40}} className="inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-gray-300 text-slate-400 hover:border-green-600 hover:text-white hover:bg-green-600">
                <i className="mdi mdi-instagram"></i>
              </a>
            </div>

            <div className="mt-4">
              <a
                href="/contact"
                className="btn bg-green-600 hover:bg-green-700 text-white rounded-md mt-3"
              >
                Contact Us <ArrowRight className="h-4 w-4 stroke-[3]" style={{marginLeft: "5px"}} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default OurTeamMembers