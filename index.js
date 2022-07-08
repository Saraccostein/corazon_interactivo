var ruta = window.location;

var d = document.getElementById('dibujo');
var lienzo = d.getContext('2d');
var ancho = d.width;

var texto = document.getElementById('texto_cariño');
var botón_input = document.getElementById('botón');
botón_input.addEventListener("click", dibujarPorClick);

var línea_der = 3;
var línea_izq = 3;
var l = 0;
var l2 = 0;
var color_rgb, xi, yi, axz, ayz, axd, ayd, xf, yf;

function dibujarLínea(color, x_inicial, y_inicial, anti_x_izq, anti_y_izq, anti_x_der, anti_y_der, x_final, y_final)
{
    lienzo.beginPath();
    lienzo.lineWidth = 4;
    lienzo.lineCap ='round';
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.bezierCurveTo(anti_x_izq, anti_y_izq, anti_x_der, anti_y_der, x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarPorClick()
{
    var heart = parseInt(texto.value);
    var heart_der = heart;
    var heart_izq = heart;

    if (heart == 1 || heart == 2 || heart == 3)
    {
        for(l = 0; l < heart_der; l++ )
        {
            color_rgb = '#786de7';
            xi = 150;
            yi = 100 + (l * 30);

            axz = 195 - (l * 15);
            ayz = 35 + (l * 22);

            axd = 335 - (l * 35);
            ayd = 120 + (l * 6);

            xf = 150;
            yf = 250 - (l * 20);

            dibujarLínea(color_rgb, 150, yi, axz, ayz, axd, ayd, 150, yf);
            console.log('línea derecha no.' + l);
        }

        for(l2 = 0; l2 < heart_izq; l2++ )
        {
            color_rgb = 'rgb(166, 99, 255)';
            xi = 150;
            yi = 100 + (l2 * 30);

            axz = 105 + (l2 * 15);
            ayz = 35 + (l2 * 22 + l2);

            axd = -35 + (l2 * 35);
            ayd = 120 + (l2 * 6);

            xf = 150;
            yf = 250 - (l2 * 20);

            dibujarLínea(color_rgb, 150, yi, axz, ayz, axd, ayd, 150, yf);
            console.log('línea izquierda no.'+ l2);
        }
    texto.value = "";
    }
    else {
        alert('La capacidad de esta página solo da para 3 corazones >.<')
    }
}
