-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-10-2021 a las 23:59:51
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectosoftware`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_avatar_delete` (IN `_id` INT)  BEGIN
delete from tbl_avatar_item where avatarId = _id;
delete from tbl_avatar where id = _id;
end$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_avatar_insert` (IN `_nombre` TEXT, IN `_usuarioId` INT)  BEGIN
insert into tbl_avatar VALUES (DEFAULT, _nombre, now(), _usuarioId);
select * from tbl_avatar where id = LAST_INSERT_ID();
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_avatar_selectAll` ()  select * from tbl_avatar$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_avatar_selectAllxUsuario` (IN `_usuarioId` INT)  select * from tbl_avatar where usuarioId = _usuarioId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_avatar_selectById` (IN `_id` INT)  select * from tbl_avatar where id = _id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_avatar_update` (IN `_id` INT, IN `_nombre` TEXT)  BEGIN
    UPDATE tbl_avatar SET
    nombre = _nombre
    where id = _id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_item_avatar_delete` (IN `_idAvatar` INT)  delete from tbl_avatar_item where avatarId = _idAvatar$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_item_avatar_insert` (IN `_idAvatar` INT, IN `_idItem` INT)  insert into tbl_avatar_item VALUES (DEFAULT, _idAvatar, _idItem )$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_item_avatar_selectAllxAvatarId` (IN `_avatarId` INT)  SELECT i.id, i.nombre, i.posicion_x, i.posicion_y, i.posicion_z, i.ancho, i.alto, c.nombre as nombreCategoria FROM `tbl_avatar_item` ai join tbl_item i on i.id=ai.itemId join tbl_categoria c on c.id=i.categoriaId where avatarId = _avatarId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_item_selectAll` ()  SELECT i.id, i.nombre, i.posicion_x, i.posicion_y, i.posicion_z, i.ancho, i.alto, c.nombre as nombreCategoria from tbl_item i join tbl_categoria c on c.id = i.categoriaId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_usuario_delete` (IN `_id` INT)  BEGIN
	delete from usuario where id = _id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_usuario_inser` (IN `email` TEXT, IN `password` TEXT)  BEGIN
	INSERT into usuario values (DEFAULT, email, sha1(password));
    select * from usuario where id = LAST_INSERT_ID();
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_usuario_selectAll` ()  BEGIN
	select * from usuario;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_usuario_selectById` (IN `_id` INT)  BEGIN
	select * from usuario where id = _id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_usuario_selectByLogin` (IN `_correo` TEXT, IN `_password` TEXT)  BEGIN
	SELECT id, email from usuario where email like _correo and password like sha1(_password);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_usuario_update` (IN `_email` TEXT, IN `_password` TEXT, IN `_id` INT)  BEGIN
	UPDATE usuario set 
    email = _email,
    password = _password
    WHERE id = _id;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_avatar`
--

CREATE TABLE `tbl_avatar` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `fecha` date NOT NULL,
  `usuarioId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_avatar_item`
--

CREATE TABLE `tbl_avatar_item` (
  `id` int(11) NOT NULL,
  `avatarId` int(11) NOT NULL,
  `itemId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_categoria`
--

CREATE TABLE `tbl_categoria` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbl_categoria`
--

INSERT INTO `tbl_categoria` (`id`, `nombre`) VALUES
(1, 'Ojos'),
(2, 'Boca'),
(3, 'Cabello'),
(4, 'Cuerpo'),
(5, 'Polera'),
(6, 'Pantalon'),
(7, 'Lente'),
(8, 'Fondo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_item`
--

CREATE TABLE `tbl_item` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `posicion_x` text NOT NULL,
  `posicion_y` text NOT NULL,
  `posicion_z` int(11) NOT NULL,
  `ancho` text NOT NULL,
  `alto` text NOT NULL,
  `categoriaId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbl_item`
--

INSERT INTO `tbl_item` (`id`, `nombre`, `posicion_x`, `posicion_y`, `posicion_z`, `ancho`, `alto`, `categoriaId`) VALUES
(1, 'ojos_1', '64px', '45px', 50, '150px', '110px', 1),
(2, 'ojos_2', '64px', '45px', 50, '150px', '110px', 1),
(3, 'ojos_3', '64px', '45px', 50, '150px', '110px', 1),
(4, 'ojos_4', '64px', '45px', 50, '150px', '110px', 1),
(5, 'ojos_5', '64px', '45px', 50, '150px', '110px', 1),
(6, 'ojos_6', '64px', '45px', 50, '150px', '110px', 1),
(7, 'ojos_7', '64px', '45px', 50, '150px', '110px', 1),
(8, 'ojos_8', '64px', '45px', 50, '150px', '110px', 1),
(9, 'ojos_9', '64px', '45px', 50, '150px', '110px', 1),
(10, 'ojos_10', '64px', '45px', 50, '150px', '110px', 1),
(11, 'ojos_11', '64px', '45px', 50, '150px', '110px', 1),
(12, 'boca_1', '165px', '70px', 10, '110px', '50px', 2),
(13, 'boca_2', '165px', '70px', 10, '110px', '50px', 2),
(14, 'boca_3', '165px', '70px', 10, '110px', '50px', 2),
(15, 'boca_4', '165px', '70px', 10, '110px', '50px', 2),
(16, 'boca_5', '165px', '70px', 10, '110px', '50px', 2),
(17, 'boca_6', '165px', '70px', 10, '110px', '50px', 2),
(18, 'boca_7', '165px', '70px', 10, '110px', '50px', 2),
(19, 'boca_8', '165px', '70px', 10, '110px', '50px', 2),
(20, 'boca_9', '165px', '70px', 10, '110px', '50px', 2),
(21, 'cabello_1', '-33px', '-17px', 91, '279px', '205px', 3),
(22, 'cabello_2', '-33px', '-17px', 91, '279px', '205px', 3),
(23, 'cabello_3', '-33px', '-17px', 91, '279px', '205px', 3),
(24, 'cabello_4', '-33px', '-17px', 91, '279px', '205px', 3),
(25, 'cabello_5', '-33px', '-17px', 91, '279px', '205px', 3),
(27, 'cabello_6', '-33px', '-17px', 91, '279px', '205px', 3),
(28, 'cabello_7', '-33px', '-17px', 91, '279px', '205px', 3),
(29, 'cuerpo_1', '0px', '0px', 0, '100%', '100%', 4),
(30, 'cuerpo_2', '0px', '0px', 0, '100%', '100%', 4),
(31, 'cuerpo_3', '0px', '0px', 0, '100%', '100%', 4),
(32, 'cuerpo_4', '0px', '0px', 0, '100%', '100%', 4),
(33, 'cuerpo_5', '0px', '0px', 0, '100%', '100%', 4),
(34, 'polera_1', '195px', '7px', 80, '220px', '127px', 5),
(35, 'polera_2', '195px', '7px', 80, '220px', '127px', 5),
(36, 'polera_3', '195px', '7px', 80, '220px', '127px', 5),
(37, 'polera_4', '195px', '7px', 80, '220px', '127px', 5),
(38, 'polera_5', '195px', '7px', 80, '220px', '127px', 5),
(39, 'pantalon_1', '294px', '30px', 70, '185px', '50px', 6),
(40, 'pantalon_2', '294px', '30px', 70, '185px', '50px', 6),
(41, 'pantalon_3', '294px', '30px', 70, '185px', '50px', 6),
(42, 'pantalon_4', '294px', '30px', 70, '185px', '50px', 6),
(43, 'pantalon_5', '294px', '30px', 70, '185px', '50px', 6),
(44, 'pantalon_6', '294px', '30px', 70, '185px', '50px', 6),
(45, 'lente_1', '75px', '-8px', 80, '250px', '110px', 7),
(46, 'lente_2', '75px', '-8px', 80, '250px', '110px', 7),
(47, 'lente_3', '75px', '-8px', 80, '250px', '110px', 7),
(48, 'lente_4', '75px', '-8px', 80, '250px', '110px', 7),
(49, 'lente_5', '75px', '-8px', 80, '250px', '110px', 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tbl_avatar`
--
ALTER TABLE `tbl_avatar`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuarioId` (`usuarioId`);

--
-- Indices de la tabla `tbl_avatar_item`
--
ALTER TABLE `tbl_avatar_item`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tbl_avatar_item_ibfk_1` (`itemId`),
  ADD KEY `tbl_avatar_item_ibfk_2` (`avatarId`);

--
-- Indices de la tabla `tbl_categoria`
--
ALTER TABLE `tbl_categoria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tbl_item`
--
ALTER TABLE `tbl_item`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoriaId` (`categoriaId`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`) USING HASH;

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tbl_avatar`
--
ALTER TABLE `tbl_avatar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `tbl_avatar_item`
--
ALTER TABLE `tbl_avatar_item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT de la tabla `tbl_categoria`
--
ALTER TABLE `tbl_categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `tbl_item`
--
ALTER TABLE `tbl_item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tbl_avatar`
--
ALTER TABLE `tbl_avatar`
  ADD CONSTRAINT `tbl_avatar_ibfk_1` FOREIGN KEY (`usuarioId`) REFERENCES `usuario` (`id`);

--
-- Filtros para la tabla `tbl_avatar_item`
--
ALTER TABLE `tbl_avatar_item`
  ADD CONSTRAINT `tbl_avatar_item_ibfk_1` FOREIGN KEY (`itemId`) REFERENCES `tbl_item` (`id`),
  ADD CONSTRAINT `tbl_avatar_item_ibfk_2` FOREIGN KEY (`avatarId`) REFERENCES `tbl_avatar` (`id`);

--
-- Filtros para la tabla `tbl_item`
--
ALTER TABLE `tbl_item`
  ADD CONSTRAINT `tbl_item_ibfk_1` FOREIGN KEY (`categoriaId`) REFERENCES `tbl_categoria` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
