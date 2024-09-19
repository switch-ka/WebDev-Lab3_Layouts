@extends('Components.layout')

@section('title', 'Home')

@section('styles')
    <link rel="stylesheet" href="{{ asset('css/styles.css') }}">
@endsection
<nav class="navbar">
        <ul>
            <li><a href="{{ route('blog') }}">Home</a></li>
            <li><a href="{{ route('about') }}">About Us</a></li>
            <li><a href="{{ route('contact') }}">Contact Us</a></li>
        </ul>
    </nav>
@section('content')
<video autoplay muted loop class="video-background" preload="auto">
    <source src="/images/carvid4.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

<section id="cards" class="section">   
    <div class="wrapper">
        <div class="vehicle-card">  
            <div class="details">
                <div class="thumb-gallery">
                    <img class="first" src="https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2017/03/2018-Bugatti-Chiron-119.jpg" />
                    <img class="second" src="https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2017/03/2018-Bugatti-Chiron-117.jpg" />
                </div>
                <div class="info">
                    <h3>Bugatti Chiron</h3>
                    <div class="ctas">
                        <a href="{{ route('post1') }}" class="btn primary">Model Details</a>
                        <div style="clear:both;"></div>
                    </div>
                    <div class="desc">
                        <p>Leaving the 99.99 percent in its dust, the Chiron is a 1500-hp smackdown of every hypercar.</p>
                    </div>
                    <div class="specs">
                        <div class="spec mpg">
                            <span>EPA City/Hwy</span>
                            <p>9/14<span>mpg</span></p>
                        </div>
                        <div class="spec mpg">
                            <span>0-60</span>
                            <p>2.3<span>sec</span></p>
                        </div>
                        <div class="spec mpg">
                            <span>Horsepower</span>
                            <p>1500<span>hp</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="vehicle-card">
            <div class="details">
                <div class="thumb-gallery">
                    <img class="first" src="https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2017/09/2018-Mercedes-AMG-GT-GTC-116.jpg" />
                    <img class="second" src="https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2017/09/2018-Mercedes-AMG-GT-GTC-114.jpg" />
                </div>
                <div class="info">
                    <h3>Mercedes-AMG GT</h3>
                    <div class="ctas">
                    <a href="{{ route('post2') }}" class="btn primary">Model Details</a>
                        <div style="clear:both;"></div>
                    </div>
                    <div class="desc">
                        <p>Sporting an adaptive adjustable suspension, active aerodynamics, and trick rear-axle steering.</p>
                    </div>
                    <div class="specs">
                        <div class="spec mpg">
                            <span>EPA City/Hwy</span>
                            <p>16/22<span>mpg</span></p>
                        </div>
                        <div class="spec mpg">
                            <span>0-60</span>
                            <p>3.5<span>sec</span></p>
                        </div>
                        <div class="spec mpg">
                            <span>Horsepower</span>
                            <p>503<span>hp</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="vehicle-card">
            <div class="details">
                <div class="thumb-gallery">
                    <img class="first" src="https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2016/02/2016-Lamborghini-Huracan-LP610-4-Spyder-111.jpg" />
                    <img class="second" src="https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2016/02/2016-Lamborghini-Huracan-LP610-4-Spyder-101.jpg" />
                </div>
                <div class="info">
                    <h3>Lamborghini Huracan</h3>
                    <div class="ctas">
                    <a href="{{ route('post3') }}" class="btn primary">Model Details</a>
                        <div style="clear:both;"></div>
                    </div>
                    <div class="desc">
                        <p>Nothing on Earth can prepare you for the eyeball-melting performance, and smooth steering.</p>
                    </div>
                    <div class="specs">
                        <div class="spec mpg">
                            <span>EPA City/Hwy</span>
                            <p>14/20<span>mpg</span></p>
                        </div>
                        <div class="spec mpg">
                            <span>0-60</span>
                            <p>2.5<span>sec</span></p>
                        </div>
                        <div class="spec mpg">
                            <span>Horsepower</span>
                            <p>602<span>hp</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

@endsection
