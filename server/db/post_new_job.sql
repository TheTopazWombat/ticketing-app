insert into jobs
   (
    job_number,
    last_name,
    product,
    tech_assigned,
    time,
    checked_in,
    final_test,
    recharged,
    counter,
    customer_approval,
    archived
  )
  values (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    $8,
    $9,
    $10,
    'false'
  )
  returning *;
