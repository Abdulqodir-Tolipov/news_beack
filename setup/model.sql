create database news_website

create table users (
    user_id serial primary key,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    email varchar(50) not null unique,
    password varchar(30) not null,
    specialist varchar(30) not null
);

create table languages (
    language_id serial primary key,
    language_name varchar(20) not null
);

create table categories (
    category_id serial primary key,
    category_name varchar(30) not null,
    language_id int not null references languages (language_id) on delete cascade
);

create table news (
    news_id serial primary key,
    news_title varchar(40) not null,
    news_body text not null,
    news_created_at timestamptz default current_timestamp,
    views int,
    author_id int not null references users (user_id) on delete cascade,
    category_id int not null references categories (category_id) on delete cascade,
    language_id int not null references languages (language_id) on delete cascade
);