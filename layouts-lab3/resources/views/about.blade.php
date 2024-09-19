@extends('Components.layout')

@section('title', 'About Us')

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
    <section id="about" class="section">
    <div class="container2">
        <h1>About Us</h1>
        <div class="card-container">
            <div class="card">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAADbCAMAAABOUB36AAAA2FBMVEX///8dHRsdHBgdLDkAAAAdGxcJAAD5/v8YFQ4bGRMaFxATDQAEAADy+f8LAgAXEwoAABgADi40TmeBlarR3+4QCgDw9/8AABLf6vbD0+IAAAsAABbn8fsAJUCNo7oAACUlTG0ALEcgQl6qvdE6WnYUNU0AAB1adI0AHzdOa4drhqG7zN+iuM+esMKUpriouctgfZmBnLhihKY3XYAIN1cAGDREZYNAWXIuTGUAFC0AESGSrMdxjKcAKksAIEQaO1QADSKzzeYdJCoAHDAAFDdPcI8AKEAAIkAOk7M7AAAIMElEQVR4nO2d2XraOhSFsSvbGDOWyRAgTIGASQItkKaQNud0yPu/0THggMMM0kYLcv6L3vQirM/SnrS1FQicCiPl3N3fPzipyMn+5OnJNYuMMV13/7mtl1Kyfw4Ndp2lTWWGasbCrFqqldrNVqs5cv+z25P9+8TgXFvKe0I6C6etWMxiX8osel2Q/Qt5KaRytVHcVDZihVQlVm2Wcobsn3osqWS92JjsSG2zSu/jWmFWKZ2l0MxXpsdMdZfChVTWP0fLVGJ7K/SIDWzZP/pQjE49eKhMxSrL/tmHken9ZoerVBTmyP7lh9AphrfY1i2k27J/+v5khuw4ke7ufIw4yea3m8rNYxLcHuVe00eKVBTt5onpVtA0Teu6Bx37duKho1W6kaDnYtXv2B9zdPSCfS/3ewc5AByxnRHPnjpZtgX7QTuiVE6EWnnQzMXJi1PporE/shWtw04I2Zc+WFe2plWM6nJWKUDnSLaqFb7owlUqZgIsmo+Uj48KtpAGW7Zdgm/pol1Bfc5Udv8E+iD0pGxpfsZRGpWK+Sxbmp8fon3JHAYUDDkHV0T2JnwvW9yCMYmZnWK1ZItbUOXJvrYT+ilb3Bw7TmRnXbRERra8N2p0WxPJBrXptqYrsyZb3hvVY6qV+xIuyZbnUXgRmmcuAVPVzFFuTSVWl63P4z5MKTNUla3Poyk+n/ZhVkBOBPt0wYGL+gvDcWauKS2QomYxSrYpUgvkOk6MzJo0BlJgwiBaQ+vKzMlWOIU01MOR2SL1JzAyHykjWhyZhDn1TCaECTIqZOUuTyaEQzGKtDLVK4jwIJIgDYIU8xaiC4FcJkboTi0TJN+klpkey1Y4hVomSNndIJYJUtkz/tI6FJB+ReOGWCZEEBQI/KStkeRBZH4mDd0/iswGRKz3YWQ+xihlagmIkDYQGJLKNG8hQlrqIol5AyKzS1ryCj7K1ueRpGnw8rCasvV5PJCWo2HavGiPN0Ei90CgQNWvN5MJEgQFAs+EQa2WADG0rqkl9Cixsmx1cyhtUBTFAtE2eYEk1VPqZOGe+gQSuE+4I1u1INXLGTaZS2F3srXNKeRSZIdi+X9yIH6zds2yn6i+5r+/GPsiW+GEQiKkqHSWVlVU1pGt0aVE3GABEiF8Jq0dTFCz8s9xI79pjxYmAIQINnHv01SmfK9C3ck2lSn/TOyDyCwQhu1zmQ+yVbo5NXG7jIJRQKBtjZ6g/QYoIFC3mYKUMKm7n1B69shuqHqE+rIVTqEt08I0zGQGH6KThPoYF+WuPGWZVlHMIoA7mUDb0h/7LFufB63nhPCaE2ijd5iyO23KCZBsetDNdlBQYqAJlD0WMP0ytDYIaLpD5JZu1QKUu+bQ5Zwg1xZmdOhOxIaytfmw82QnYihDD6aMmTmfXykKVVU0vQy0Zl1Gr4z9FapT/dRgiS6WShfbFrtDrWYB890CsSOgYEL2ZcTKhBlFsozYTAWmJXEZsW4F4OBkPRmht6hQKl2rCD1OQTg4WY/I83mYgt4qIiN47YdsNRspCWx6D36TrWYjIh0n2mBaHyJb9yB6njYgrnVPxZjpsB5xN1JATvvWk2KiVq0OlU4vI8pzag3gNSuulGlBzudfIGYWnYob6c0Q8znTqCn1nK8CAj4zAXRdYT32E3+aghwavMFf+ErjHJts4Q9nn1DoFWPm5Q4ifNZWzcIcaG6H7/0FHfTpnlW4hpSgu8wFLY6QD2iM+y54+qHMvyDdTrvheYHBxHl7YBdJDpcCMxB7Nzwygyi9a7v5X+b/Mj+UTKBXXnbBI/OMHArPzGyYKUi74ZmTdEZREM/JmDY4G5l8oTtkl8w6eCbSwYzV2w3PxRSE++J78jHSar5B7zi97TswuC6NIbVDb4WvPwi3H2gJvmFQOPdOdsDXaQHbkrgM37UU8/Y8SnsjzkMUC6mLfyNj7v4DvQwfCGWGArosrAq470z1hcyqDV3hvSXvY3QlqpOE/YFNVApDJq5vONoHXbidV6HDlUP5MWCCbQ+Z4Gt/ql5BC28jvReCS38hNoRKPkdFneYunBVvo/hQo/Mser0u0KKNNsIXLfQqjPShEC360pVdUMh1Ezr5kCs1zeo1eVY31euzNP0wwYnQGBt0HRlKc8lqXid+w9CPmWaVrnPS0Mhw2hWmB+knz60oTbQeTmR5I05zwNL0U+fWolmsUb8jN72uxltmSdLoKY0RKzWcZkKyxrnSLJFSw+kOmHUSu7oPru2N1zui92lqXIH4jn5cpU8tgV7GLvVZFEzjDNci/WgLyUsjtXo2fEL/eCiul+mXeLdpql1ksVP7x0MJhV9aHJmp0SmDLtZl3MVb6R33Se3xK/6HXGDqjdbhuzTXitOnHmJxP+m3zkGGt1YGcpEHEGTPpb1PYDp9Rj6Sngoz/DTeK2jo/KStBlBj6oPxzi/qVM9b5ARTT/S27lG7zkiHsJ4Kk1W2HO3Xrsmnep+KENt46O3kz8yFbENlG2YxZ17Pflf6UTe0pPDe1EMjVFxncMWOqEJAXzfvg+zxKGmse/Gabr6jPNb0pFA+LikLdaXN8RI/5prhttWLiH6WUbPvd+flmdkZ0fexEO0L2/LQBv7DpUL8HJPofXg3KYL+ATtZvHvK4PJCgzf8IcIp3gKThW9iKPUzPDLx3dUWM8sIk8WEpUtes75VK25sHCLzUXaXvGaV+W0sW9hwPEy8iy10b2tj4L3wfanx7BuzmTWRwQWVLdcyvVxH/XadfKav54kcEYzJNBCqn+0h375oL4VA5NelppoL3M2ZY5p66USTgdL3T5fP1/8ANgLQeNvsrnkAAAAASUVORK5CYII=" alt="Karl">
                <h3>Karl De Vera</h3>
                <h4>Leader</h4>
                <p>I’m a 3rd year student at Bicol University, majoring in BS Information Technology. I’m really into coding and creating webpages, and I love playing online games.</p>
            </div>
            <div class="card">
                <img src="data:image/png;base64,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" alt="Juliane">
                <h3>Juliane Dayandante</h3>
                <h4>Member</h4>
                <p>I’m a 3rd year student at Bicol University, majoring in BS Information Technology. I’m into coding, designing and creating webpages and I learning new things. If i am not at the front of my laptop I'm watching random movies.</p>
            </div>
            <div class="card">
                <img src="data:image/png;base64,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" alt="Malbert">
                <h3>Malbert Colarina</h3>
                <h4>Member</h4>
                <p>I’m a 3rd year student at Bicol University, majoring in BS Information Technology. I’m into analyzing data in schemas and i also like to create webpages, I like designing. If i am not at the front of my laptop I'm playing online games or out for a stroll in the city.</p>
            </div>
            <div class="description-container">
                <h2>About This Page</h2>
                <p>
                    Welcome to our automotive hub! This page is dedicated to car enthusiasts and those looking to explore the fascinating world of automobiles. Here, you'll find detailed information about various car models, industry news, maintenance tips, and reviews. Whether you're in the market for a new car, a classic car enthusiast, or just passionate about the latest automotive technology, our goal is to provide you with insightful and up-to-date content to fuel your passion for cars. Enjoy exploring our diverse range of articles, reviews, and guides designed to enhance your car knowledge and driving experience.
                </p>
            </div>
            <footer class="footer">
                <p>&copy; 2024 JDM. All rights reserved.</p>
            </footer>
        </div>
    </section>
    @endsection
