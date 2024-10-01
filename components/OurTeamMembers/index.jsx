import { teamMembers } from "@/data/teamMembers"
import Image from "next/image"

function OurTeamMembers() {
    const team = teamMembers

  return (
    <div className="container relative">
    <div className="grid grid-cols-1 pb-8 text-center">
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Meet The Agent Team</h3>

        <p className="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
    </div>
    <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
        
        {
            team?.map((item, idx) => (
                <div key={idx} className="lg:col-span-3 md:col-span-6">
                    <div className="group text-center">
                        <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                            <Image src={item?.img} className="" alt={item.name} />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                            <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                                {
                                    item.socials.map((social, idx) => (
                                        <li key={idx} className="inline"><a href="#" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><i data-feather={`${social.name}`} className="h-4 w-4"></i></a></li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className="content mt-3">
                            <a href="#" className="text-xl font-medium hover:text-green-600 transition-all duration-500 ease-in-out">{item.name}</a>
                            <p className="text-slate-400">{item.role}</p>
                        </div>
                    </div>
                </div>
            ))
        }
        
    </div>

    <div class="container relative lg:mt-24 mt-16">
                <div class="grid grid-cols-1 text-center">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white">Have Question ? Get in touch!</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                
                    <div class="mt-6">
                        <a href="/contact" class="btn bg-green-600 hover:bg-green-700 text-white rounded-md"><i class="uil uil-phone align-middle me-2"></i> Contact us</a>
                    </div>
                </div>
            </div>
</div>
  )
}

export default OurTeamMembers