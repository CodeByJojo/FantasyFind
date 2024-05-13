const Hero = ({title = 'Time For Adventure', subtitle = 'With New Friends'}) => {
    return (
        <section className='bg-slate-600 py-10 mb-4'>
        <div
          className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'
        >
          <div className='text-center'>
            <h1
              className='text-4xl text-white sm:text-5xl md:text-6xl font-railway'
            >
              {title}
            </h1>
            <p className='my-4 text-xl text-white'>
              {subtitle}
            </p>
          </div>
        </div>
      </section>
    )
}

export default Hero;