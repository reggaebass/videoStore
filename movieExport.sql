--
-- PostgreSQL database dump
--

-- Dumped from database version 16.4
-- Dumped by pg_dump version 16.4

-- Started on 2024-10-02 12:54:59 EDT

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 24987)
-- Name: movies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.movies (
    id integer NOT NULL,
    title character varying(255),
    genre character varying(255),
    language character varying(25),
    director character varying(30),
    year integer,
    price double precision,
    stock integer
);


ALTER TABLE public.movies OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 24986)
-- Name: movies_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.movies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.movies_id_seq OWNER TO postgres;

--
-- TOC entry 3596 (class 0 OID 0)
-- Dependencies: 215
-- Name: movies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.movies_id_seq OWNED BY public.movies.id;


--
-- TOC entry 3443 (class 2604 OID 24990)
-- Name: movies id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies ALTER COLUMN id SET DEFAULT nextval('public.movies_id_seq'::regclass);


--
-- TOC entry 3590 (class 0 OID 24987)
-- Dependencies: 216
-- Data for Name: movies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.movies (id, title, genre, language, director, year, price, stock) FROM stdin;
19	Run Lola Run	Thriller	German	Tom Tykwer	1998	5.75	10
21	A Separation	Drama	Persian	Asghar Farhadi	2011	7.75	10
10	Oldboy	Action	Korean	Park Chan-wook	2003	6.75	7
4	Spirited Away	Animation	Japanese	Hayao Miyazaki	2001	5.5	9
17	The Secret in Their Eyes	Mystery	Spanish	Juan José Campanella	2009	7.25	9
9	The Intouchables	Comedy-Drama	French	Olivier Nakache	2011	7.75	9
13	Life of Pi	Adventure	English	Ang Lee	2012	8	9
15	The Lives of Others	Drama	German	Florian Henckel	2006	7.5	9
12	The Grand Budapest Hotel	Comedy	English	Wes Anderson	2014	8.25	9
18	Let the Right One In	Horror	Swedish	Tomas Alfredson	2008	6.5	9
14	Memories of Murder	Crime	Korean	Bong Joon-ho	2003	6.25	9
20	The Hunt	Drama	Danish	Thomas Vinterberg	2012	7.5	10
3	Amélie	Romantic Comedy	French	Jean-Pierre Jeunet	2001	9	8
6	City of God	Crime	Portuguese	Fernando Meirelles	2002	7	8
5	The Godfather	Crime	English	Francis Ford Coppola	1972	8	5
8	The Shawshank Redemption	Drama	English	Frank Darabont	1994	6.5	10
16	Her	Science Fiction	English	Spike Jonze	2013	8.75	1
2	Parasite	Thriller	Korean	Bong Joon-ho	2019	9	5
7	Pan's Labyrinth	Fantasy	Spanish	Guillermo del Toro	2006	8.5	8
1	Inception	Science Fiction	English	Christopher Nolan	2010	7.5	1
11	Crouching Tiger, Hidden Dragon	Action	Mandarin	Ang Lee	2000	7.25	8
\.


--
-- TOC entry 3597 (class 0 OID 0)
-- Dependencies: 215
-- Name: movies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.movies_id_seq', 21, true);


--
-- TOC entry 3445 (class 2606 OID 24994)
-- Name: movies movies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (id);


-- Completed on 2024-10-02 12:55:00 EDT

--
-- PostgreSQL database dump complete
--

