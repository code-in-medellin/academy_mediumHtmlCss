let cantidadequipos = prompt("Cuantos equipos participan del torneo?");
var equipos = [];

for (i=0; i<cantidadequipos; i++)
{
    //0 Nombre Equipo, 1 Puntos, 2 PG, 3 PP.
    equipos[i] = [prompt("Nombre del Equipo"), 0, 0, 0]
}

const solicitarMarcador = (posicion) =>
{
    let marcador = prompt(equipos[posicion][0]);
    if (marcador == "G" || marcador == "g")
    {
        equipos[posicion][1] = equipos[posicion][1] + 2;
        equipos[posicion][2] = equipos[posicion][2] + 1;
    }
    else if (marcador == "E" || marcador == "e")
    {
        equipos[posicion][1] = equipos[posicion][1] + 1;
    }
    else
    {
        equipos[posicion][2] = equipos[posicion][3] + 1;
    }
}

//5 Fechas entonces la I llega hasta cinco.
for (i = 0; i < 5; i++)
{
    for (equipo in equipos)
    {
        solicitarMarcador(equipo);
    }
}

for (equipo in equipos)
{
    let definicion = `<strong>${equipos[equipo][0]}:</strong><br>
                _________Puntos: ${equipos[equipo][1]}<br>
                _________Partidos Ganados: ${equipos[equipo][2]} <br>
                _________Partidos Perdidos: ${equipos[equipo][3]} <br>`;
    document.writeln(definicion);
    if (equipos[equipo][1] >= 8)
    {
        document.writeln(`<b style='color:red'> CLASIFICADO A SIGUIENTE RONDA ${equipos[equipo][0]} </b><br>`);
    }
}
