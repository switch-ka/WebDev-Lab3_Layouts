@extends('Components.layout')

@section('title', 'Page 3')

@section('styles')
    <link rel="stylesheet" href="{{ asset('css/post3.css') }}">
@endsection

@section('content')
<header>
<button class="return-button" onclick="goBack()" data-blog-url="{{ route('blog') }}">
    Return
</button>
<img src="https://media.istockphoto.com/id/878591552/photo/philippines-flag-a-series-of-flags-of-the-world.jpg?s=2048x2048&w=is&k=20&c=e3FB-opSyJ09SS8xBpOT6Ufh2XXjYBn6EWikLT2GMng=" alt="Philippine Flag">
        <h1> WebSpeed:Cars and Enthusiast</h1>
    </header>

    <main>
        <div class="year-selector">
            <label for="year">Select Year:</label>
            <select id="year" onchange="updateContent()">
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </div>

        <div class="content"></div>
            <h2 id="year-title">Lamborghini Huracan</h2>
            <p id="year-description">This is a simple HTML page to demonstrate basic HTML structure and styling.</p>
            <img id="year-image" src="" alt="Yearly Image">
            <p id="image-description">Additional description will appear here.</p>
            
        </div>
        <div class="comments-section"></div>
            <h2>Comments</h2>
            <form class="comment-form" id="commentForm">
                <input type="text" id="name" placeholder="Your Name" required>
                <textarea id="comment" rows="4" placeholder="Your Comment" required></textarea>
                <button type="submit">Submit Comment</button>
            </form>
            <ul class="comments-list" id="commentsList"></ul>
        </div>
    </main>

    @section('scripts')
    <script src="{{ asset('js/post3.js') }}"></script>
    @endsection
@endsection
