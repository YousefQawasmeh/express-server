BEGIN;

  drop table if exists university
  CASCADE;

create table university
(
  id serial primary key,
  name varchar(200) unique,
  web_page varchar(40) ,
  domain varchar(30) ,
  country varchar(40)
);



COMMIT;





