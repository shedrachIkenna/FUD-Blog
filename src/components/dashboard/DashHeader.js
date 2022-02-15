

const DashHeader = () => {
    return (
        <div className="flex flex-row justify-between py-4 border px-4 items-center">
            <div>
                <h2 className="font-bold">Check Notice Board</h2>
            </div>
                <a href="/" className="py-1 px-4 bg-primary rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
        </div>
    )
}

export default DashHeader
