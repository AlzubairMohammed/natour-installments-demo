CREATE TABLE installment_user_register (
    id  BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    rent_id BIGINT UNSIGNED,
    name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(20),
    have_family BOOLEAN,
    salary DECIMAL(10, 2),
    nationality VARCHAR(100),
    gender BOOLEAN,
    more_info TEXT,
    user_id INT,
    expect_rent_date DATE,
    FOREIGN KEY (rent_id) REFERENCES rents(id)
);

CREATE TABLE out_appartment (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    register_id BIGINT UNSIGNED,
    owner_name VARCHAR(255),
    owner_phone VARCHAR(255),
    type INT,
    city_id BIGINT UNSIGNED,
    area_id BIGINT UNSIGNED,
    is_rented BOOLEAN,
    FOREIGN KEY (register_id) REFERENCES installment_user_register(id),
    FOREIGN KEY (city_id) REFERENCES cities(id),
    FOREIGN KEY (area_id) REFERENCES areas(id)
);

CREATE TABLE appartments (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    city_id BIGINT UNSIGNED,
    area_id BIGINT UNSIGNED,
    type INT,
    street_name VARCHAR(255),
    building_name VARCHAR(255),
    building_no BIGINT,
    price DECIMAL(10,2),
    owner_name VARCHAR(255),
    owner_phone INT,
    lat VARCHAR(255),
    lng VARCHAR(255),
    images VARCHAR(255),
    status INT,
    FOREIGN KEY (city_id) REFERENCES cities(id),
    FOREIGN KEY (area_id) REFERENCES areas(id)
);

CREATE TABLE installments (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    installment_user_register_id BIGINT UNSIGNED,
    appartment_id BIGINT UNSIGNED,
    installment_start_date DATE,
    installment_end_date DATE,
    is_guarantee BOOLEAN,
    FOREIGN KEY (appartment_id) REFERENCES appartments(id),
    FOREIGN KEY (installment_user_register_id) REFERENCES installment_user_register(id)
)

CREATE TABLE installment_months(
    status 	INT,
    installment_id	BIGINT UNSIGNED,
    paid_date DATE,
    payment_method INT
)

