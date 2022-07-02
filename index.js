
var ruta = window.location;
console.log(ruta);
document.write('<span style="color:#786de7"> Estás en: ' + ruta + '<span>');

var d = document.getElementById('dibujo');
var lienzo = d.getContext('2d');
console.log(xi);

var línea_der = 3;
var línea_izq = 3;
var l = 0;
var l2 = 0;
var color_rgb, xi, yi, axz, ayz, axd, ayd, xf, yf;
var R, G, B;

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

for(l = 0; l < línea_der; l++ )
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
    console.log('línea ' + l);
}

for(l2 = 0; l2 < línea_izq; l2++ )
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
    console.log('línea '+ l2);
}

/*          |  color  | xi | yi|axz| ayz|axd|ayd|  xf|  yf|  
dibujarLínea('#a663ff', 50, 120, 50, 50, 150, 50, 150, 120);
dibujarLínea('#a663ff', 150, 120, 150, 50, 250, 50, 250, 120);

dibujarLínea('#a663ff', 150, 110, 185, 30, 335, 120, 150, 250);
dibujarLínea('#a663ff', 150, 110, 115, 30, -35, 120, 150, 250);

dibujarLínea('#a663ff', 150, 140, 170, 50, 305, 120, 150, 230);
dibujarLínea('#a663ff', 150, 140, 130, 50, -5, 120, 150, 230);*/

/*
dibujarLínea('#a663ff', 150, 150, 190, 40, 310, 110, 150, 230);
dibujarLínea('#a663ff', 150, 150, 110, 40, -10, 110, 150, 230);

dibujarLínea('#a663ff', 150, 110, 200, 10, 340, 120, 150, 250);
dibujarLínea('#a663ff', 150, 110, 100, 10, -40, 120, 150, 250);

/* Cuadrado 
dibujarLínea('#a663ff', 0, 0, 0, 300);
dibujarLínea('#a663ff', 0, 0, 300, 0);
dibujarLínea('#a663ff', 300, 300, 0, 300);
dibujarLínea('#a663ff', 300, 0, 300, 300);
z
dibujarLínea('#a663ff', 150, 290, 150, 270);
dibujarLínea('#a663ff', 130, 270, 130, 250);
dibujarLínea('#a663ff', 110, 250, 110, 230);
dibujarLínea('#a663ff', 90, 230, 90, 210);
dibujarLínea('#a663ff', 70, 210, 70, 190);
dibujarLínea('#a663ff', 50, 190, 50, 170);

dibujarLínea('#a663ff', 170, 270, 170, 250);
dibujarLínea('#a663ff', 190, 250, 190, 230);
dibujarLínea('#a663ff', 210, 230, 210, 210);
dibujarLínea('#a663ff', 230, 210, 230, 190);
dibujarLínea('#a663ff', 250, 190, 250, 170);

dibujarLínea('#a663ff', 30, 170, 30, 90);
dibujarLínea('#a663ff', 270, 170, 270, 90);

dibujarLínea('#a663ff', 50, 90, 50, 70);
dibujarLínea('#a663ff', 250, 90, 250, 70);

dibujarLínea('#a663ff', 150, 110, 150, 90);

dibujarLínea('#a663ff', 130, 90, 130, 70);
dibujarLínea('#a663ff', 170, 90, 170, 70);

dibujarLínea('#a663ff', 70, 70, 70, 50);
dibujarLínea('#a663ff', 90, 70, 90, 50);
dibujarLínea('#a663ff', 110, 70, 110, 50);
dibujarLínea('#a663ff', 190, 70, 190, 50);
dibujarLínea('#a663ff', 210, 70, 210, 50);
dibujarLínea('#a663ff', 230, 70, 230, 50);*/



