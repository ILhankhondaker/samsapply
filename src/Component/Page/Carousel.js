import Carousel from 'react-bootstrap/Carousel';
import './Test.css'


function UncontrolledExample() {
    return (

        <div className='mt-5'>
            <h1 className='text-center heading font-bold text-5xl m-2'>Word's From Our Student</h1>
            <p className='text-center  fs-5'>Successful partners and users are the torchbearer of our endless effort to offer the best possible service.</p>
            <div className='m-2 p-5  d-flex justify-content-center'>
                <Carousel>

                    {/*======== first slide ======== */}
                    <Carousel.Item>
                        <div class="card p-1 m-1">
                            <figure class="px-10 pt-10">
                                <img src="https://samsapply.co.uk/landrick/images/Testimonial/Oxford-International-Logo.png" alt="Shoes" class="imgsize" />
                            </figure>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title">"SAMS Global has been a very trustable agent partner to work with. And its platform also boosts the admission and student conversion efficiency with Oxford International Education Group."</h2>
                                <h1 className='font-bold text-2xl text-red-500'>Shu-Han Chang</h1>

                                <p class="card-title">Senior Sales Manager
                                    <br />Oxford International Education Group</p>

                            </div>
                        </div>

                    </Carousel.Item>

                    {/*======== second slider  ======== */}
                    <Carousel.Item>
                        <div class="card p-1 m-1">
                            <figure class="px-10 pt-10">
                                <img src="https://samsapply.co.uk/landrick/images/Testimonial/De-Montford-Logo.png" alt="Shoes" class="imgsize" />
                            </figure>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title">"Friendly user, helps educational consultants throughout the process, very organized and highly recommended."</h2>
                                <h1 className='font-bold text-2xl text-red-500'>Amr Fahhad</h1>

                                <p class="card-title">Area Manager <br />De Montfort University</p>

                            </div>
                        </div>
                    </Carousel.Item>

                    {/* third slider  */}
                    <Carousel.Item>
                        <div class="card p-1 m-1">
                            <figure class="px-10 pt-10">
                                <img src="https://samsapply.co.uk/landrick/images/Testimonial/Sheffield-Hallam-University.png" alt="Shoes" class="imgsize" />
                            </figure>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title">"Sheffield Hallam University has worked with colleagues at SAMS Apply for many years.Having a global agent based on Sheffield has allowed us to develop a good working relationship with the core team at SAMS Apply. They know the city and the university very well and it's great that they can support students with their applications to Sheffield Hallam University. "</h2>
                                <h1 className='font-bold text-2xl text-red-500'>Miss Lucy Jackson</h1>

                                <p class="card-title">Senior Global Partnership Officer
                                    <br />  Global Development & Partnerships, Sheffield Hallam University</p>

                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>

    );
}

export default UncontrolledExample;