import razerLogo from "@imagenes/razer-logo.png";
import razerText from "@imagenes/razer-logo-text.png";

const Template = () => {
    const view = `
    <div class="page-container">
            <header>
                <nav class="header-navbar">
                    <ul>
                        <li class="navbar-image">
                            <img
                                src="${razerLogo}"
                                alt="razer-button"
                            />
                        </li>
                        <li><a href="">PC</a></li>
                        <li><a href="">Console</a></li>
                        <li><a href="">Mobile</a></li>
                        <li><a href="">Support</a></li>
                        <li><a href="">Store</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <div class="main-container">
                    <h2 class="subtitle">First buy of</h2>
                    <h1 class="title">Laptops & desktops</h1>
                    <p class="small-text">
                        Razer systems are crafted to provide the ultimate
                        performance for gaming and work. Enjoy desktop power
                        made mobile with our gaming and productivity laptops.
                    </p>
                </div>
            </main>
            <footer>
                <section class="products-container">
                    <div id="mouse-card" class="product-card">
                        <p>Mouse</p>
                        <p>Learn more</p>
                    </div>
                    <div id="keyboard-card" class="product-card">
                        <p>Keyboard</p>
                        <p>Learn more</p>
                    </div>
                    <div id="headphones-card" class="product-card">
                        <p>Audio</p>
                        <p>Learn more</p>
                    </div>
                </section>
            </footer>
            <aside>
                <div class="aside__left">
                    <img
                        src="${razerLogo}"
                        alt="razer-logo"
                    />
                </div>
                <div class="aside__right">
                    <div class="aside-text">
                        <p class="small-text">For gamers.</p>
                        <p class="small-text">By Gamers.</p>
                    </div>
                    <div class="aside-image-container">
                        <img
                            src="${razerText}""
                            alt="razer-text"
                        />
                    </div>
                </div>
            </aside>
        </div>
        <div id="modal-container" class="hidden">
            <div id="product-modal">
                <p id="modal-text"></p>
                <span class="small-text">Gaming Performance</span>
                <div class="slider-modal">
                    <div class="modal-cards modal__first"></div>
                    <div class="modal-cards modal__second"></div>
                    <div class="modal-cards modal__third"></div>
                </div>
                <div id="close-modal">
                    <p>X</p>
                </div>
            </div>
        </div>
  `;
    return view;
};

export default Template;
