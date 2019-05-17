CREATE DATABASE Events;
use Events;

CREATE TABLE IF NOT EXISTS events (
    
    id INT(10) unsigned NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
    location VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
    date DATE NOT NULL,
    capacity INT(10) unsigned NOT NULL,
    audence VARCHAR(100) COLLATE utf8_unicode_ci NOT NULL,
    description VARCHAR(300) COLLATE utf8_unicode_ci NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    INDEX(id)
) ENGINE=InnoDB DEFAULT CHARACTER SET = utf8;
DESCRIBE events;

CREATE TABLE IF NOT EXISTS reservations (
    
    id INT(10) unsigned NOT NULL AUTO_INCREMENT,
    quantity INT(10) unsigned NOT NULL,
    id_user INT(10) unsigned NOT NULL,
    id_event INT(10) unsigned NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    FOREIGN KEY (id_event)
        REFERENCES events(id)
        ON DELETE CASCADE
        ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARACTER SET = utf8;

DESCRIBE reservations;