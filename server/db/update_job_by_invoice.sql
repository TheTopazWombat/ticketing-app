update jobs set
  job_number = $1,
  last_name = $2,
  product = $3,
  tech_assigned = $4,
  time = $5,
  checked_in = $6,
  final_test = $7,
  recharged = $8, 
  counter = $9,
  customer_approval = $10,
  archived = $11
  where job_number = $1;
