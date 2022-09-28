-- Fill sample data for Milano-Cortina'2026 Winter Olympic Games

USE venue_implementation_tracker;

INSERT INTO disciplines (dis_disciplinecode,dis_disciplinename) VALUES ('ALP','Alpine Skiing');
INSERT INTO disciplines (dis_disciplinecode,dis_disciplinename) VALUES ('BOB','Bobsleigh');
INSERT INTO disciplines (dis_disciplinecode,dis_disciplinename) VALUES ('BTH','Biathlon');
INSERT INTO disciplines (dis_disciplinecode,dis_disciplinename) VALUES ('CCS','Cross-Country Skiing');
INSERT INTO disciplines (dis_disciplinecode,dis_disciplinename) VALUES ('CUR','Curling');
INSERT INTO disciplines (dis_disciplinecode,dis_disciplinename) VALUES ('FRS','Free Style Skiing');
INSERT INTO disciplines (dis_disciplinecode,dis_disciplinename) VALUES ('FSK','Figure Skating');
INSERT INTO disciplines (dis_disciplinecode,dis_disciplinename) VALUES ('IHO','Ice Hockey');
INSERT INTO disciplines (dis_disciplinecode,dis_disciplinename) VALUES ('LUG','Luge');
INSERT INTO disciplines (dis_disciplinecode,dis_disciplinename) VALUES ('NCB','Nordic Combined');
INSERT INTO disciplines (dis_disciplinecode,dis_disciplinename) VALUES ('SBD','Snowboard');
INSERT INTO disciplines (dis_disciplinecode,dis_disciplinename) VALUES ('SJP','Skii Jumping');
INSERT INTO disciplines (dis_disciplinecode,dis_disciplinename) VALUES ('SKN','Skeleton');
INSERT INTO disciplines (dis_disciplinecode,dis_disciplinename) VALUES ('SMO','Skii Mountaineering');
INSERT INTO disciplines (dis_disciplinecode,dis_disciplinename) VALUES ('SSK','Speed Skating');
INSERT INTO disciplines (dis_disciplinecode,dis_disciplinename) VALUES ('STK','Short Track Speed Skating');

INSERT INTO zones (zon_zonecode, zon_zonename, zon_description) VALUES ('MIL', 'Milano', '');
INSERT INTO zones (zon_zonecode, zon_zonename, zon_description) VALUES ('VTE', 'Valtellina', '');
INSERT INTO zones (zon_zonecode, zon_zonename, zon_description) VALUES ('VER', 'Verona', '');
INSERT INTO zones (zon_zonecode, zon_zonename, zon_description) VALUES ('VFI', 'Val di Fiemme', '');
INSERT INTO zones (zon_zonecode, zon_zonename, zon_description) VALUES ('COR', 'Cortina d\'Ampezzo', '');
INSERT INTO zones (zon_zonecode, zon_zonename, zon_description) VALUES ('ANT', 'Anterselva', '');


INSERT INTO venues (ven_venuecode, ven_venuename, ven_description, ven_venuetype, ven_zonecode) VALUES ('MST', 'Meazza Stadium', '', 'Non-Competition', 'MIL'); -- Open Ceremony
INSERT INTO venues (ven_venuecode, ven_venuename, ven_description, ven_venuetype, ven_zonecode) VALUES ('PSG', 'Palaitalia Santa Giulia', '', 'Competition', 'MIL'); -- Ice Hockey
INSERT INTO venues (ven_venuecode, ven_venuename, ven_description, ven_venuetype, ven_zonecode) VALUES ('MHA', 'Milano Hockey Arena', '', 'Competition', 'MIL'); -- IH PIH
INSERT INTO venues (ven_venuecode, ven_venuename, ven_description, ven_venuetype, ven_zonecode) VALUES ('FOA', 'Forum Di Assagio', '', 'Competition', 'MIL'); -- Short Track and Figure Skating
INSERT INTO venues (ven_venuecode, ven_venuename, ven_description, ven_venuetype, ven_zonecode) VALUES ('PDU', 'Piazza Duomo', '', 'Non-Competition', 'MIL'); -- Closing Ceremony PG
INSERT INTO venues (ven_venuecode, ven_venuename, ven_description, ven_venuetype, ven_zonecode) VALUES ('LIV', 'Livigno', '', 'Competition', 'VTE'); -- Free Style and  Snowboard
INSERT INTO venues (ven_venuecode, ven_venuename, ven_description, ven_venuetype, ven_zonecode) VALUES ('BOS', 'Bormio Stelvio', '', 'Competition', 'VTE'); -- Alpine Skiing and skiiing mountain
INSERT INTO venues (ven_venuecode, ven_venuename, ven_description, ven_venuetype, ven_zonecode) VALUES ('AVE', 'Arena Of Verona', '', 'Non-Competition', 'VER'); 
INSERT INTO venues (ven_venuecode, ven_venuename, ven_description, ven_venuetype, ven_zonecode) VALUES ('BAP', 'Baselga Di Pinè', '', 'Competition', 'VFI'); -- Speed skating
INSERT INTO venues (ven_venuecode, ven_venuename, ven_description, ven_venuetype, ven_zonecode) VALUES ('TES', 'Tesero Cross-Country Skiing Stadium', '', 'Competition', 'VFI'); -- Cross Country and  Nordic Combined  
INSERT INTO venues (ven_venuecode, ven_venuename, ven_description, ven_venuetype, ven_zonecode) VALUES ('PRE', 'Predazzo Ski Jumping Stadium', '', 'Competition', 'VFI'); -- Ski Jumping and Nordic Combined
INSERT INTO venues (ven_venuecode, ven_venuename, ven_description, ven_venuetype, ven_zonecode) VALUES ('ODT', 'Olympia Delle Tofane', '', 'Competition', 'COR'); -- Alpine Skiing
INSERT INTO venues (ven_venuecode, ven_venuename, ven_description, ven_venuetype, ven_zonecode) VALUES ('CSC', 'Cortina Sliding Centre', '', 'Competition', 'COR'); -- Boblegih Luge and Sekeleton
INSERT INTO venues (ven_venuecode, ven_venuename, ven_description, ven_venuetype, ven_zonecode) VALUES ('COS', 'Cortina Olympic Stadium', '', 'Competition', 'COR'); -- Curling
INSERT INTO venues (ven_venuecode, ven_venuename, ven_description, ven_venuetype, ven_zonecode) VALUES ('SUA', 'Südtirol Arena', '', 'Competition', 'ANT'); -- Biathlon
UPDATE venues SET ven_description = 'The Giuseppe Meazza Stadium in Milan, better known as San Siro, is the main sports facility in Milan. It hosts matches of the city\’s two football teams, AC Milan and Inter Milan. With 80,018 seats, it is the ninth stadium in Europe in terms of seating capacity. It will also be the venue for the XXV Olympic Winter Games Milano Cortina 2026 opening ceremony on February 6, 2026.'
WHERE ven_venuecode = 'MST';
UPDATE venues SET ven_description = ''
WHERE ven_venuecode = 'PSG';
UPDATE venues SET ven_description = ''
WHERE ven_venuecode = 'MHA';
UPDATE venues SET ven_description = 'The Forum of Assago, Mediolanum Forum, was constructed in 1990 and has a central arena that can host up to 12,700 spectators over three levels. Mediolanum Forum stands as one of the leading multi-purpose venues in Europe.
The Mediolanum Forum is served by the Green line of the Milan Metro. It is only seven stops away from the town’s centre, which helps to make it even closer to the hearts of the Milanese people.'
WHERE ven_venuecode = 'FOA';
UPDATE venues SET ven_description = ''
WHERE ven_venuecode = 'PDU';
UPDATE venues SET ven_description = ''
WHERE ven_venuecode = 'LIV';
UPDATE venues SET ven_description = ''
WHERE ven_venuecode = 'BOS';
UPDATE venues SET ven_description = ''
WHERE ven_venuecode = 'AVE';
UPDATE venues SET ven_description = ''
WHERE ven_venuecode = 'BAP';
UPDATE venues SET ven_description = ''
WHERE ven_venuecode = 'TES';
UPDATE venues SET ven_description = ''
WHERE ven_venuecode = 'PRE';
UPDATE venues SET ven_description = ''
WHERE ven_venuecode = 'ODT';
UPDATE venues SET ven_description = ''
WHERE ven_venuecode = 'CSC';
UPDATE venues SET ven_description = ''
WHERE ven_venuecode = 'COS';
UPDATE venues SET ven_description = ''
WHERE ven_venuecode = 'SUA';


INSERT INTO venuedisciplines (vdi_venuecode, vdi_disciplinecode) VALUES ('PSG', 'IHO');
INSERT INTO venuedisciplines (vdi_venuecode, vdi_disciplinecode) VALUES ('MHA', 'IHO');
INSERT INTO venuedisciplines (vdi_venuecode, vdi_disciplinecode) VALUES ('FOA', 'STK');
INSERT INTO venuedisciplines (vdi_venuecode, vdi_disciplinecode) VALUES ('FOA', 'FSK');
INSERT INTO venuedisciplines (vdi_venuecode, vdi_disciplinecode) VALUES ('LIV', 'FRS');
INSERT INTO venuedisciplines (vdi_venuecode, vdi_disciplinecode) VALUES ('LIV', 'SBD');
INSERT INTO venuedisciplines (vdi_venuecode, vdi_disciplinecode) VALUES ('BOS', 'ALP');
INSERT INTO venuedisciplines (vdi_venuecode, vdi_disciplinecode) VALUES ('BOS', 'SMO');
INSERT INTO venuedisciplines (vdi_venuecode, vdi_disciplinecode) VALUES ('BAP', 'SSK');
INSERT INTO venuedisciplines (vdi_venuecode, vdi_disciplinecode) VALUES ('TES', 'CCS');
INSERT INTO venuedisciplines (vdi_venuecode, vdi_disciplinecode) VALUES ('TES', 'NCB');
INSERT INTO venuedisciplines (vdi_venuecode, vdi_disciplinecode) VALUES ('PRE', 'SJP');
INSERT INTO venuedisciplines (vdi_venuecode, vdi_disciplinecode) VALUES ('PRE', 'NCB');
INSERT INTO venuedisciplines (vdi_venuecode, vdi_disciplinecode) VALUES ('ODT', 'ALP');
INSERT INTO venuedisciplines (vdi_venuecode, vdi_disciplinecode) VALUES ('CSC', 'BOB');
INSERT INTO venuedisciplines (vdi_venuecode, vdi_disciplinecode) VALUES ('CSC', 'SKN');
INSERT INTO venuedisciplines (vdi_venuecode, vdi_disciplinecode) VALUES ('CSC', 'LUG');
INSERT INTO venuedisciplines (vdi_venuecode, vdi_disciplinecode) VALUES ('COS', 'CUR');
INSERT INTO venuedisciplines (vdi_venuecode, vdi_disciplinecode) VALUES ('SUA', 'BTH');

INSERT INTO users (usr_username, usr_given_name, usr_family_name, usr_password, usr_active, usr_locked) VALUES ('john@deloitte.com', 'John', 'Smith', 'mypassword', 'N', 'N');
INSERT INTO users (usr_username, usr_given_name, usr_family_name, usr_password, usr_active, usr_locked) VALUES ('paul@deloitte.com', 'Paul', 'Samuelson', 'mypassword', 'N', 'N');
INSERT INTO users (usr_username, usr_given_name, usr_family_name, usr_password, usr_active, usr_locked) VALUES ('mary@deloitte.com', 'Mary', 'Brown', 'mypassword', 'N', 'N');
INSERT INTO users (usr_username, usr_given_name, usr_family_name, usr_password, usr_active, usr_locked) VALUES ('susane@deloitte.com', 'Susane', 'Austin', 'mypassword', 'N', 'N');
INSERT INTO users (usr_username, usr_given_name, usr_family_name, usr_password, usr_active, usr_locked) VALUES ('gavin@deloitte.com', 'Gavin', 'Gray', 'mypassword', 'N', 'N');

INSERT INTO userprofiles (upr_username, upr_rolename) VALUES ('john@deloitte.com','Administrator');
INSERT INTO userprofiles (upr_username, upr_rolename) VALUES ('paul@deloitte.com','Venue Manager');
INSERT INTO userprofiles (upr_username, upr_rolename) VALUES ('mary@deloitte.com','Venue Manager');
INSERT INTO userprofiles (upr_username, upr_rolename) VALUES ('susane@deloitte.com','Viewer');
INSERT INTO userprofiles (upr_username, upr_rolename) VALUES ('susane@deloitte.com','Venue Manager');
INSERT INTO userprofiles (upr_username, upr_rolename) VALUES ('gavin@deloitte.com','Viewer');


INSERT INTO venueuserprofiles (vup_username, vup_rolename, vup_venuecode)  VALUES ('paul@deloitte.com', 'Venue Manager', 'PSG');
INSERT INTO venueuserprofiles (vup_username, vup_rolename, vup_venuecode)  VALUES ('paul@deloitte.com', 'Venue Manager', 'MHA');
INSERT INTO venueuserprofiles (vup_username, vup_rolename, vup_venuecode)  VALUES ('paul@deloitte.com', 'Venue Manager', 'FOA');
INSERT INTO venueuserprofiles (vup_username, vup_rolename, vup_venuecode)  VALUES ('mary@deloitte.com', 'Venue Manager', 'LIV');
INSERT INTO venueuserprofiles (vup_username, vup_rolename, vup_venuecode)  VALUES ('mary@deloitte.com', 'Venue Manager', 'BOS');
INSERT INTO venueuserprofiles (vup_username, vup_rolename, vup_venuecode)  VALUES ('mary@deloitte.com', 'Venue Manager', 'BAP');
INSERT INTO venueuserprofiles (vup_username, vup_rolename, vup_venuecode)  VALUES ('susane@deloitte.com', 'Viewer', 'PSG');
INSERT INTO venueuserprofiles (vup_username, vup_rolename, vup_venuecode)  VALUES ('susane@deloitte.com', 'Viewer', 'MHA');
INSERT INTO venueuserprofiles (vup_username, vup_rolename, vup_venuecode)  VALUES ('susane@deloitte.com', 'Viewer', 'FOA');
INSERT INTO venueuserprofiles (vup_username, vup_rolename, vup_venuecode)  VALUES ('susane@deloitte.com', 'Venue Manager', 'CSC');
INSERT INTO venueuserprofiles (vup_username, vup_rolename, vup_venuecode)  VALUES ('susane@deloitte.com', 'Venue Manager', 'COS');
INSERT INTO venueuserprofiles (vup_username, vup_rolename, vup_venuecode)  VALUES ('susane@deloitte.com', 'Venue Manager', 'SUA');
INSERT INTO venueuserprofiles (vup_username, vup_rolename, vup_venuecode)  VALUES ('gavin@deloitte.com', 'Viewer', 'LIV');
INSERT INTO venueuserprofiles (vup_username, vup_rolename, vup_venuecode)  VALUES ('gavin@deloitte.com', 'Viewer', 'BOS');
INSERT INTO venueuserprofiles (vup_username, vup_rolename, vup_venuecode)  VALUES ('gavin@deloitte.com', 'Viewer', 'BAP');
INSERT INTO venueuserprofiles (vup_username, vup_rolename, vup_venuecode)  VALUES ('gavin@deloitte.com', 'Viewer', 'SUA');


INSERT INTO categories (cat_categoryname) VALUES ('Spaces');
INSERT INTO categories (cat_categoryname) VALUES ('Services');


INSERT INTO subcategories (sub_subcategoryname, sub_categoryid) VALUES ('Build',1);
INSERT INTO subcategories (sub_subcategoryname, sub_categoryid) VALUES ('Power',1);
 


INSERT INTO topics (top_topicname, top_topictype, top_topicsubcategory) VALUES ('Results Room Power', 'checkbox',2);
INSERT INTO topics (top_topicname, top_topictype, top_topicsubcategory) VALUES ('Press Tribune Power', 'checkbox',2);
INSERT INTO topics (top_topicname, top_topictype, top_topicsubcategory) VALUES ('Results Room Furniture', 'percentage',2);
INSERT INTO topics (top_topicname, top_topictype, top_topicsubcategory) VALUES ('Results Room Furniture', 'percentage',2);

INSERT INTO venuetopics (vto_venuecode, vto_topicid, vto_track, vto_lowerbound, vto_upperbound, vto_value) VALUES('CSC', 1, TRUE, '', '', 'TRUE');
INSERT INTO venuetopics (vto_venuecode, vto_topicid, vto_track, vto_lowerbound, vto_upperbound, vto_value) VALUES('CSC', 2, TRUE, '', '', 'FALSE');
INSERT INTO venuetopics (vto_venuecode, vto_topicid, vto_track, vto_lowerbound, vto_upperbound, vto_value) VALUES('CSC', 3, TRUE, '', '', '50');
INSERT INTO venuetopics (vto_venuecode, vto_topicid, vto_track, vto_lowerbound, vto_upperbound, vto_value) VALUES('CSC', 4, TRUE, '', '', '80');





-- CREATE TABLE topics (
-- CREATE TABLE userprofiles (
-- CREATE TABLE venueuserprofiles (
-- CREATE TABLE venuetopics (


