CREATE DATABASE IF NOT EXISTS Events;
use Events;

CREATE TABLE IF NOT EXISTS events (
    
    id INT(10) unsigned NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
    location VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
    date DATE NOT NULL,
    capacity INT(10) unsigned NOT NULL,
    audence VARCHAR(100) COLLATE utf8_unicode_ci NOT NULL,
    description VARCHAR(300) COLLATE utf8_unicode_ci NOT NULL,
    tipo VARCHAR(100) COLLATE utf8_unicode_ci NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY(id),
    INDEX(id),
    INDEX(tipo),
    INDEX(location)
) ENGINE=InnoDB DEFAULT CHARACTER SET = utf8;
DESCRIBE events;

CREATE TABLE IF NOT EXISTS reservations (
    
    id INT(10) unsigned NOT NULL AUTO_INCREMENT,
    quantity INT(10) unsigned NOT NULL,
    id_user INT(10) unsigned NOT NULL,
    id_event INT(10) unsigned NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (id_event)
        REFERENCES events(id)
        ON DELETE CASCADE
        ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARACTER SET = utf8;

DESCRIBE reservations;

ALTER USER 'mysql'@'%' IDENTIFIED WITH mysql_native_password BY '1234';
FLUSH PRIVILEGES;