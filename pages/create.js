const Create = () => {
    return ( 
        <section>
            <div className='text-center p-5 lg:text-right lg:absolute lg:right-20'>
                <h1 className='text-5xl font-bold pt-4 pb-1 text-primary-400'>Enter</h1>
                <h1 className='text-5xl font-bold'>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-primary-100'>
                    Your Event
                </span></h1>
                <h1 className='text-5xl font-bold pt-1 text-primary-400'>details.</h1>
                <p className='text-lg leading-5 text-text-600 pt-5 px-2 max-w-sm sm:text-md mx-auto lg:text-right lg:mr-0'>
                Just fill up the details below for your event and your ready to go!
                </p>
            </div>
            <div className='text-center py-5 drop-shadow-sm lg:text-left'>
            </div>
            <div className='text-center py-5 lg:absolute lg:right-24 lg:top-[20rem]'>
            </div>

          <form className="flex flex-col px-8">
            <label htmlFor="name" className="mb-2 italic">Event name</label>
            <input
                className="mb-4 border-b-2"
                id="event_name"
                name="event_name"
                type="text"
                required
            />
            <label htmlFor="name" className="mb-2 italic">Host name</label>
            <input
                className="mb-4 border-b-2"
                id="host_name"
                name="host_name"
                type="text"
                autocomplete="name"
                required
            />
            <label htmlFor="name" className="mb-2 italic">Start time/date</label>
            <input
                className="mb-4 border-b-2"
                id="start"
                name="start"
                type="date"
                required
            />
            <label htmlFor="name" className="mb-2 italic">End time/date</label>
            <input
                className="mb-4 border-b-2"
                id="end"
                name="end"
                type="date"
                autocomplete="name"
                required
            />
            <label htmlFor="name" className="mb-2 italic">Location</label>
            <input
                className="mb-4 border-b-2"
                id="location"
                name="location"
                type="location"
                autocomplete="street-address"
                required
            />
            <button
                type="submit"
                className='bg-gradient-to-r from-primary-200 to-primary-100 text-white text-lg font-semibold md:px-12 px-4 py-4 rounded-xl'
            >Submit</button>
          </form>
        </section>
     );
}
 
export default Create;