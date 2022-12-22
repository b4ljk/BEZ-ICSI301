import "./shoppingCardComponent.js";
const header = `<div class="header">
<div class="largeNavbar">
    <a href="index.html"
        ><img src="./assets/logohorizontal.png" height="90" width="120" style="margin-right: 20px" alt="logo"
    /></a>
    <nav style="display:flex;justify-content:center;align-items:center">
        <a href="about.html"><h2 class="headerAClass">About us</h2></a>
        <a href="category.html?type=cake"><h2 class="headerAClass">Cake</h2></a>
        <a href="category.html?type=bakery"><h2 class="headerAClass">Bakery</h2></a>
        <a href="category.html?type=bread"><h2 class="headerAClass">Bread</h2></a>
        <a href="category.html?type=desert"><h2 class="headerAClass">Desert</h2></a>
        <a href="category.html?type=catering"><h2 class="headerAClass">Catering</h2></a>
        <a href="category.html?type=drinks"><h2 class="headerAClass">Drinks</h2></a>
        
		<cart-component></cart-component>
    </nav>
</div>
</div>

<div class="phone">
<div class="content">
    <nav role="navigation">
        <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
                <li><a href="about.html">Бидний тухай</a></li>
                <li><a href="category.html">Бялуу</a></li>
                <li><a href="category.html">Бейкэри</a></li>
                <li><a href="category.html">Талх</a></li>
                <li><a href="category.html">Амттан</a></li>
                <li><a href="category.html">Уух зүйлс</a></li>
                <li><a href="category.html">Түргэн зууш</a></li>
            </ul>
        </div>
        <img src="./assets/logohorizontal.png" height="70" width="100" alt="logo" />
    </nav>
</div>
</div>`;

document.getElementById("headercomp").insertAdjacentHTML("beforeend", header);
