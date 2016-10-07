create table jobs (
  job_number integer primary key,
  last_name varchar(40),
  product varchar(40),
  tech_assigned varchar(40),
  time varchar(255),
  checked_in boolean,
  final_test boolean,
  recharged boolean,
  counter integer,
  customer_approval boolean
);
