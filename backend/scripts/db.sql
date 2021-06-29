create database if not exists taskDB;

use taskDB;

create table if not exists(
    id int not null auto_increment,
    title varchar(100) not null,
    dscription text;
    primary key {id}
);

insert into tasks (title, description) values 
('task1', 'some description')
('task2', 'some description');
