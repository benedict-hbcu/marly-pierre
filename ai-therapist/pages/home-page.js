import Head from 'next/head';

const Header = () => {
  return (
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no, viewport-fit=cover" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>AI Therapist</title>
      <link rel="shortcut icon" href="/img/favicon.ico" />
      <link rel="stylesheet" href="/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/css/style.css" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" />
    </Head>
  );
};

const Navigation = () => {
  return (
    <nav className="navbar bg-light navbar-light navbar-expand-lg">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src="/img/logo.png" alt="Logo" width="50" height="50" title="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="/home-page" className="nav-link active">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/about-us" target="_self" className="nav-link">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a href="/start-session" target="_self" className="nav-link">
                Start Session
              </a>
            </li>
            <li className="nav-item">
              <a href="/motivational-dashboard" target="_self" className="nav-link">
                Motivational Dashboard
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const ImageCarousel = () => {
  return (
    <div id="carousel" className="carousel slide" data-ride="carousel" data-interval="3500">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/img/carousel/1.png" alt="" className="w-100" />
          <div className="carousel-caption">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-8 bg-custom d-none d-md-block py-3 px-0">
                  <h1>WELCOME</h1>
                  <div className="border-top border-primary w-50 mx-auto my-3"></div>
                  <h3 className="pb-3">WE'VE BEEN WAITING 4 U</h3>
                  <a href="#" className="btn btn-danger btn-lg mr-2">
                    Learn More
                  </a>
                  <a href="#" className="btn btn-primary btn-lg ml-2">
                    Start Session
                  </a>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
            
                 );
                }
                
