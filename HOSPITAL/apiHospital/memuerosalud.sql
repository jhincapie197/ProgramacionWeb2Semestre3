-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-06-2024 a las 15:31:28
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `memuerosalud`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `appointments`
--

CREATE TABLE `appointments` (
  `appointment_id` int(11) NOT NULL,
  `patient_id` int(11) NOT NULL,
  `doctor_id` int(11) NOT NULL,
  `appointment_date` date NOT NULL,
  `appointment_time` time NOT NULL,
  `status` enum('scheduled','cancelled') DEFAULT 'scheduled'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `appointments`
--

INSERT INTO `appointments` (`appointment_id`, `patient_id`, `doctor_id`, `appointment_date`, `appointment_time`, `status`) VALUES
(1, 1, 1, '2024-06-01', '10:00:00', 'scheduled'),
(2, 3, 1, '2024-06-02', '11:00:00', 'scheduled'),
(3, 5, 1, '2024-06-03', '12:00:00', 'scheduled'),
(4, 1, 2, '2024-06-01', '14:00:00', 'scheduled'),
(5, 3, 2, '2024-06-02', '15:00:00', 'scheduled');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `doctors`
--

CREATE TABLE `doctors` (
  `doctor_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `specialty_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `doctors`
--

INSERT INTO `doctors` (`doctor_id`, `user_id`, `specialty_id`) VALUES
(1, 2, 1),
(2, 4, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `schedules`
--

CREATE TABLE `schedules` (
  `schedule_id` int(11) NOT NULL,
  `doctor_id` int(11) NOT NULL,
  `day_of_week` enum('Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday') NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `schedules`
--

INSERT INTO `schedules` (`schedule_id`, `doctor_id`, `day_of_week`, `start_time`, `end_time`) VALUES
(1, 1, 'Monday', '09:00:00', '17:00:00'),
(2, 1, 'Wednesday', '09:00:00', '17:00:00'),
(3, 2, 'Tuesday', '10:00:00', '18:00:00'),
(4, 2, 'Thursday', '10:00:00', '18:00:00'),
(5, 2, 'Friday', '10:00:00', '16:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `specialties`
--

CREATE TABLE `specialties` (
  `specialty_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `specialties`
--

INSERT INTO `specialties` (`specialty_id`, `name`, `description`) VALUES
(1, 'Cardiología', 'Especialidad médica de las enfermedades del corazón'),
(2, 'Dermatología', 'Especialidad médica de las enfermedades de la piel'),
(3, 'Neurología', 'Especialidad médica de las enfermedades del sistema nervioso'),
(4, 'Pediatría', 'Especialidad médica del tratamiento de niños'),
(5, 'Oftalmología', 'Especialidad médica de las enfermedades de los ojos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_type` enum('patient','doctor','admin') NOT NULL,
  `state` enum('active','inactive') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_id`, `name`, `email`, `password`, `user_type`, `state`, `created_at`, `updated_at`) VALUES
(1, 'John Doe', 'john@example.com', 'john123', 'patient', 'active', '2024-06-06 21:31:52', '2024-06-09 04:48:54'),
(2, 'Jane Smith', 'jane@example.com', 'Jane123', 'doctor', 'active', '2024-06-06 21:31:52', '2024-06-09 04:48:54'),
(3, 'Alice Brown', 'alice@example.com', 'alice123', 'patient', 'active', '2024-06-06 21:31:52', '2024-06-09 04:48:54'),
(4, 'Mark Johnson', 'mark@example.com', 'mark123', 'doctor', 'active', '2024-06-06 21:31:52', '2024-06-09 04:48:54'),
(5, 'Bob White', 'bob@example.com', 'bob123', 'patient', 'active', '2024-06-06 21:31:52', '2024-06-09 04:48:54'),
(6, 'admin', 'admin12345', 'admin12345', 'patient', 'active', '2024-06-09 01:38:24', '2024-06-09 04:48:54'),
(7, 'Anita', 'anita1@example.com', 'anita12345', 'doctor', 'inactive', '2024-06-09 01:39:44', '2024-06-09 05:26:29'),
(8, 'Anita', 'anita@example.com', 'anita12345', 'doctor', 'active', '2024-06-09 04:42:03', '2024-06-09 04:48:54');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`appointment_id`),
  ADD KEY `patient_id` (`patient_id`),
  ADD KEY `doctor_id` (`doctor_id`);

--
-- Indices de la tabla `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`doctor_id`),
  ADD UNIQUE KEY `user_id` (`user_id`),
  ADD KEY `specialty_id` (`specialty_id`);

--
-- Indices de la tabla `schedules`
--
ALTER TABLE `schedules`
  ADD PRIMARY KEY (`schedule_id`),
  ADD KEY `doctor_id` (`doctor_id`);

--
-- Indices de la tabla `specialties`
--
ALTER TABLE `specialties`
  ADD PRIMARY KEY (`specialty_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `appointments`
--
ALTER TABLE `appointments`
  MODIFY `appointment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `doctors`
--
ALTER TABLE `doctors`
  MODIFY `doctor_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `schedules`
--
ALTER TABLE `schedules`
  MODIFY `schedule_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `specialties`
--
ALTER TABLE `specialties`
  MODIFY `specialty_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `appointments`
--
ALTER TABLE `appointments`
  ADD CONSTRAINT `appointments_ibfk_1` FOREIGN KEY (`patient_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `appointments_ibfk_2` FOREIGN KEY (`doctor_id`) REFERENCES `doctors` (`doctor_id`);

--
-- Filtros para la tabla `doctors`
--
ALTER TABLE `doctors`
  ADD CONSTRAINT `doctors_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `doctors_ibfk_2` FOREIGN KEY (`specialty_id`) REFERENCES `specialties` (`specialty_id`);

--
-- Filtros para la tabla `schedules`
--
ALTER TABLE `schedules`
  ADD CONSTRAINT `schedules_ibfk_1` FOREIGN KEY (`doctor_id`) REFERENCES `doctors` (`doctor_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
