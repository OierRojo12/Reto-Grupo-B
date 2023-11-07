CREATE DATABASE LigaFutbol;

CREATE TABLE Equipos (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    Pais VARCHAR(50),
    Estadio VARCHAR(100),
    Entrenador VARCHAR(100),
);

INSERT INTO Equipos (Nombre, Pais, Estadio, Entrenador )
VALUES
('Equipo A', 'País A', 'Estadio A', 'Entrenador A' ),
('Equipo B', 'País B', 'Estadio B', 'Entrenador B');

