-- settings.sql
CREATE DATABASE tik;
CREATE USER tikuser WITH PASSWORD 'tik';
GRANT ALL PRIVILEGES ON DATABASE tik TO tikuser;