import React from 'react'
// Импорт библиотеки Реакт
import {Link} from 'react-router-dom'
// Импорт компонента Линк из библиотеки реакт роутер дом

const Home = () => {
    return(
        <>
        <div class="preloader d-flex align-items-center justify-content-center">
        <div class="cssload-container">
            <div class="cssload-loading"><i></i><i></i><i></i><i></i></div>
        </div>
    </div>

    <header class="header-area">
        <div class="palatin-main-menu">
            <div class="classy-nav-container breakpoint-off">
                <div class="container">
                    <nav class="classy-navbar justify-content-between" id="palatinNav">

                        <strong style={{ fontSize: '3rem', color: 'white'}}>Ritz Carlton</strong>

                        <div class="classy-navbar-toggler">
                            <span class="navbarToggler"><span></span><span></span><span></span></span>
                        </div>

                        <div class="classy-menu">

                            <div class="classycloseIcon">
                                <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                            </div>
                            <div class="classynav">
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>

    <section class="hero-area">
        <div class="">
            <div class="single-hero-slide d-flex align-items-center justify-content-center">
                <div class="slide-img bg-img" style={{backgroundImage: 'url(img/bg-img/bg-1.jpg)'}}></div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 col-lg-9" style={{textAlign: 'center'}}>
                            <div class="hero-slides-content" data-animation="fadeInUp" data-delay="100ms">
                                <div class="line" data-animation="fadeInUp" data-delay="300ms"></div>
                                <h2 data-animation="fadeInUp" data-delay="500ms">Ritz-Carlton</h2>
                                <p data-animation="fadeInUp" data-delay="700ms" style={{fontSize: 22}}>Международный отель люкс класса</p>
                                <a href="#" class="btn palatin-btn mt-50" data-animation="fadeInUp" data-delay="900ms">Подробнее</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="about-us-area">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-12 col-lg-6">
                    <div class="about-text text-center mb-100">
                        <div class="section-heading text-center">
                            <div class="line-"></div>
                            <h2>ОТЕЛЬ RITZ-CARLTON
                                ПРЕКРАСЕН ВО ВСЕМ</h2>
                        </div>
                        <p>Испытайте все лучшее, что есть в отеле Ritz-Carlton, — от спа и ужинов до индивидуальных экскурсий и роскоши клубного уровня. </p>
                        <div class="about-key-text">
                            <h6><span class="fa fa-check"></span> Качество обслуживания, отточенное веками.</h6>
                            <h6><span class="fa fa-check"></span> Насладитесь живописным видом из номеров и эксклюзивным спа.</h6>
                        </div>
                        <a href="#" class="btn palatin-btn mt-50">Подробнее</a>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="about-thumbnail homepage mb-100">
                        <div class="first-img wow fadeInUp" data-wow-delay="100ms">
                            <img src="img/bg-img/5.jpg" alt="" />
                        </div>
                        <div class="second-img wow fadeInUp" data-wow-delay="300ms">
                            <img src="img/bg-img/6.jpg" alt="" />
                        </div>
                        <div class="third-img wow fadeInUp" data-wow-delay="500ms">
                            <img src="img/bg-img/7.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="pool-area section-padding-100 bg-img bg-fixed" style={{backgroundImage: 'url(img/bg-img/4.png)'}}>
        <div class="container">
            <div class="row justify-content-end">
                <div class="col-12 col-lg-7">
                    <div class="pool-content text-center wow fadeInUp" data-wow-delay="300ms">
                        <div class="section-heading text-center white">
                            <div class="line-"></div>
                            <h2>Предложения отеля</h2>
                            <p>У нас есть ряд отличительных особенностей — от высокого уровня обслуживания и удобств на клубном уровне до уникальных возможностей познавать мир по-настоящему. Специальные предложения составлены с учетом наших особенностей, чтобы побудить гостей вернуться и привлечь тех, кто у нас еще не бывал.</p>
                        </div>

                        <div class="row">
                            <div class="col-12 col-sm-4">
                                <div class="pool-feature">
                                    <i class="icon-cocktail-1"></i>
                                    <p>Клубный бар</p>
                                </div>
                            </div>
                            <div class="col-12 col-sm-4">
                                <div class="pool-feature">
                                    <i class="icon-swimming-pool"></i>
                                    <p>Безупречные виды</p>
                                </div>
                            </div>
                            <div class="col-12 col-sm-4">
                                <div class="pool-feature">
                                    <i class="icon-beach"></i>
                                    <p>Золотой пляж</p>
                                </div>
                            </div>
                        </div>
                        <a href="#" class="btn palatin-btn mt-50">Подробнее</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="rooms-area section-padding-100-0">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-6">
                    <div class="section-heading text-center">
                        <div class="line-"></div>
                        <h2>Забронируйте первым</h2>
                        <p>НАСЛАДИТЕСЬ ТЕПЛОМ И РОСКОШЬЮ ЭЛЕГАНТНОГО ОТЕЛЯ</p>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center">

                <div class="col-12 col-md-6 col-lg-4">
                    <div class="single-rooms-area wow fadeInUp" data-wow-delay="100ms">
                        <div class="bg-thumbnail bg-img" style={{backgroundImage: 'url(img/bg-img/1.jpg)'}}></div>
                        <p class="price-from">От $200/ночь</p>
                        <div class="rooms-text">
                            <div class="line"></div>
                            <h4>Люкс номер</h4>
                            <p>Насладитесь потрясающим VIP-обслуживанием и эксклюзивным трансфером из аэропорта во время отдыха в люксе.</p>
                        </div>
                        <Link to='/contact' class="book-room-btn btn palatin-btn">Забронировать</Link>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4">
                    <div class="single-rooms-area wow fadeInUp" data-wow-delay="300ms">
                        <div class="bg-thumbnail bg-img" style={{backgroundImage: 'url(img/bg-img/8.jpg)'}}></div>
                        <p class="price-from">От $150/ночь</p>
                        <div class="rooms-text">
                            <div class="line"></div>
                            <h4>Семейный номер</h4>
                            <p>Проведите незабываемое время в одном из наших отелей, наиболее подходящем для парного или семейного отдыха.</p>
                        </div>
                        <a href="#" class="book-room-btn btn palatin-btn">Забронировать</a>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4">
                    <div class="single-rooms-area wow fadeInUp" data-wow-delay="500ms">
                        <div class="bg-thumbnail bg-img" style={{backgroundImage: 'url(img/bg-img/9.jpg)'}}></div>
                        <p class="price-from">От $100/ночь</p>
                        <div class="rooms-text">
                            <div class="line"></div>
                            <h4>Номер на одного</h4>
                            <p>Номер с балконом, большой кроватью, стильной ванной комнатой и всеми необходимыми современными удобствами.</p>
                        </div>
                        <a href="#" class="book-room-btn btn palatin-btn">Забронировать</a>
                    </div>
                </div>

            </div>
        </div>
    </section>

   

    <footer class="footer-area">
        <div class="container">
            <div class="row">

                <div class="col-12 col-lg-5">
                    <div class="footer-widget-area mt-50">
                        <strong style={{fontSize: '3rem', color: 'white'}}>Ritz Carlton</strong>
                        <p>The Ritz-Carlton управляет 91 гостиницей в крупнейших городах и на популярных курортах в 30 странах мира. </p>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4">
                    <div class="footer-widget-area mt-50">
                        <img src="img/bg-img/footer-map.png" alt="" />
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-3">
                    <div class="footer-widget-area mt-50">
                        <h6 class="widget-title mb-5">Подпишись на объявления</h6>
                        <form action="#" method="post" class="subscribe-form">
                            <input type="email" name="subscribe-email" id="subscribeemail" placeholder="Ваш E-mail" />
                            <button type="submit">Подписаться</button>
                        </form>
                    </div>
                </div>

                <div class="col-12">
                    <div class="copywrite-text mt-30">
                        <p>
<i class="fa fa-heart-o" aria-hidden="true"></i> Сделано <a href="https://vk.com/onn21" target="_blank">Оразбаевой Нургуль</a>
</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
    )
}

export default Home;

// Наша главная страница