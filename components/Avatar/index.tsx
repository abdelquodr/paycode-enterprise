import React from 'react'

export default function Avatar() {
  return (
    <div className=''>
      <div className="font-medium flex items-center content-center">
        <div className="mr-auto ml-auto w-full  md:px-6 py-2">
					<div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:max-w-md">
						<div className="flex justify-between md:justify-left p-4 md:p-8">
							<div className="flex -space-x-2 overflow-hidden mx-auto md:px-3">
								<img className="inline-block h-12 w-12 rounded-full ring-2 md:ring-2 ring-white" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" alt="" />
								<img className="inline-block h-12 w-12 rounded-full ring-2 md:ring-2 ring-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" alt="" />
								<img className="inline-block h-12 w-12  rounded-full ring-2 md:ring-2 ring-white" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
								<img className="inline-block h-12 w-12  rounded-full ring-2 md:ring-2 ring-white" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
							</div>
							<div className='flex items-center md:m-0 md:space-x-2'>
								<h4 className='text-zinc-700 text-3xl font-fit font-normal'>12M</h4>
								<p className='word-break text-xs text-zinc-500'>Active Users</p>
							</div>
						</div>
    			</div>
  			</div>
			</div>
    </div>
  )
}
