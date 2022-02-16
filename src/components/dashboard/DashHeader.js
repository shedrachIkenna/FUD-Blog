
const DashHeader = () => {
    return (
        <div className="py-4 border px-4">
            <div className="flex flex-row justify-between items-center">
                <div>
                    <h2 className="font-bold">Check Notice Board</h2>
                </div>
                <a href="/" className="py-1 px-4 bg-darkbg rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            </div>
            <div className="mt-4">
                <a href="/create">
                    <div className="flex flex-row p-4 border-2 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                        <span className="pl-4">Write an article</span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default DashHeader
