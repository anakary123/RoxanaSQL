function renderizarFooter() {
    let rutas = {
        index: 'index.html',
        galeria: 'views/galeria.html',
        contacto: 'views/contacto.html'
    };

    const footer = document.getElementById('footer');
    if (!footer) {
        console.error('El elemento con id="footer" no existe.');
        return;
    }

    const location = window.location.pathname;
    const separarLocation = location.split('/');

    const checarSiEsViews = separarLocation.includes('views');
    if (checarSiEsViews) {
        rutas = {
            index: '../index.html',
            galeria: 'galeria.html',
            contacto: 'contacto.html'
        };
    }

    footer.innerHTML = `
 <div class="row">
    <!-- Columna 1 -->
    <div class="columna">
        <p><i class="fas fa-map-marker-alt"></i> Dirección: Calle Gran Vía 46, 28055 Madrid</p>
        <p><i class="fas fa-phone"></i> Teléfono: +34 624 685 421</p>
        <p><i class="fas fa-envelope"></i> Email: <a href="mailto:info@caleidoInteriores.com">info@caleidoInteriores.com</a></p>
    </div>

    <!-- Columna 2 -->
    <div class="columna">
        <p>
            <a href="https://www.instagram.com/" class="social-link">
                <i class="fab fa-instagram"></i> @Caleido_Interiores
            </a>
        </p>
        <p>
            <a href="https://es-es.facebook.com/" class="social-link">
                <i class="fab fa-facebook-f"></i> Caleido Interiores
            </a>
        </p>
        <p>
            <a href="https://twitter.com/" class="social-link">
                <i class="fab fa-twitter"></i> @Caleido_Interiores
            </a>
        </p>
        <p>
            <a href="https://www.whatsapp.com/" class="social-link">
                <i class="fab fa-whatsapp"></i> Caleido Interiores
            </a>
        </p>
    </div>

    <!-- Columna 3 -->
    <div class="columna" ; padding: 5px;">
        <small>
            <a href="#" >Aviso Legal</a> | 
            <a href="#" >Política de Privacidad</a><br>
            &copy; 2024 <b>Caleido Interiores</b> Todos los derechos reservados.
        </small>
    </div>
</div>
`;

}

renderizarFooter();
