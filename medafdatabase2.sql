PGDMP       %                |            medafdelivery %   14.11 (Ubuntu 14.11-0ubuntu0.22.04.1)    16.0 �    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    31225    medafdelivery    DATABASE     u   CREATE DATABASE medafdelivery WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C.UTF-8';
    DROP DATABASE medafdelivery;
                postgres    false                        2615    2200    public    SCHEMA     2   -- *not* creating schema, since initdb creates it
 2   -- *not* dropping schema, since initdb creates it
                postgres    false            �           0    0    SCHEMA public    ACL     Q   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;
                   postgres    false    4            R           1247    31227    enum_User_Orders_OrderStatus    TYPE     �   CREATE TYPE public."enum_User_Orders_OrderStatus" AS ENUM (
    'pending',
    'accepted',
    'being prepared',
    'out for delivery',
    'on the way',
    'delivered',
    'canceled'
);
 1   DROP TYPE public."enum_User_Orders_OrderStatus";
       public          postgres    false    4            U           1247    31242    enum_User_Orders_PaymentStatus    TYPE     z   CREATE TYPE public."enum_User_Orders_PaymentStatus" AS ENUM (
    'Pending',
    'Paid',
    'Unpaid',
    'Cancelled'
);
 3   DROP TYPE public."enum_User_Orders_PaymentStatus";
       public          postgres    false    4            �            1259    31251    Admins    TABLE     �  CREATE TABLE public."Admins" (
    id integer NOT NULL,
    firstname character varying(255),
    "lastName" character varying(255),
    address character varying(255),
    "phoneNumber" character varying(255),
    password character varying(255),
    "emailAddress" character varying(255),
    photo character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Admins";
       public         heap    postgres    false    4            �            1259    31256    Admins_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Admins_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."Admins_id_seq";
       public          postgres    false    209    4            �           0    0    Admins_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."Admins_id_seq" OWNED BY public."Admins".id;
          public          postgres    false    210            �            1259    31257    Blogs    TABLE     5  CREATE TABLE public."Blogs" (
    id integer NOT NULL,
    title character varying(255),
    headline character varying(255),
    full_description character varying(255),
    photo character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Blogs";
       public         heap    postgres    false    4            �            1259    31262    Blogs_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Blogs_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Blogs_id_seq";
       public          postgres    false    4    211            �           0    0    Blogs_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Blogs_id_seq" OWNED BY public."Blogs".id;
          public          postgres    false    212            �            1259    31263 
   Categories    TABLE     H  CREATE TABLE public."Categories" (
    id integer NOT NULL,
    name character varying(255),
    description character varying(255),
    photo character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "ServiceTypeId" integer,
    "restaurantId" integer
);
     DROP TABLE public."Categories";
       public         heap    postgres    false    4            �            1259    31268    Categories_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Categories_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Categories_id_seq";
       public          postgres    false    4    213            �           0    0    Categories_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."Categories_id_seq" OWNED BY public."Categories".id;
          public          postgres    false    214            �            1259    31450    Contacts    TABLE       CREATE TABLE public."Contacts" (
    id integer NOT NULL,
    "fullName" character varying(255),
    phone character varying(255),
    email character varying(255),
    message text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Contacts";
       public         heap    postgres    false    4            �            1259    31449    Contacts_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Contacts_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Contacts_id_seq";
       public          postgres    false    231    4            �           0    0    Contacts_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Contacts_id_seq" OWNED BY public."Contacts".id;
          public          postgres    false    230            �            1259    31275    Drivers    TABLE     �  CREATE TABLE public."Drivers" (
    id integer NOT NULL,
    email character varying(255),
    password character varying(255),
    fname character varying(255),
    "lName" character varying(255),
    "idNumber" character varying(255),
    "vehicleType" character varying(255),
    "plateNumber" character varying(255),
    "driverRating" character varying(255),
    latitude character varying(255),
    longitude character varying(255),
    phone character varying(255),
    photo character varying(255),
    "isVerified" boolean DEFAULT false,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "creditAmount" numeric(10,2) DEFAULT 0
);
    DROP TABLE public."Drivers";
       public         heap    postgres    false    4            �            1259    31282    Drivers_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Drivers_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Drivers_id_seq";
       public          postgres    false    4    215            �           0    0    Drivers_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Drivers_id_seq" OWNED BY public."Drivers".id;
          public          postgres    false    216            �            1259    31283    Items    TABLE       CREATE TABLE public."Items" (
    id integer NOT NULL,
    name character varying(255),
    "deliverySite" character varying(255),
    "durationOnSite" character varying(255),
    description character varying(255),
    picture character varying(255),
    price character varying(255),
    "isFeatured" boolean,
    "isAvailable" boolean DEFAULT true,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "CategoryId" integer,
    "OrganizationId" integer,
    "RestaurantId" integer
);
    DROP TABLE public."Items";
       public         heap    postgres    false    4            �            1259    31289    Items_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Items_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Items_id_seq";
       public          postgres    false    217    4            �           0    0    Items_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Items_id_seq" OWNED BY public."Items".id;
          public          postgres    false    218            �            1259    31290    Organizations    TABLE        CREATE TABLE public."Organizations" (
    id integer NOT NULL,
    name character varying(255),
    address character varying(255),
    email character varying(255) NOT NULL,
    "userPassword" character varying(255),
    phone character varying(255) NOT NULL,
    "foodType" character varying(255),
    "numberofReview" integer,
    "averageReview" integer,
    discount character varying(255),
    latitude character varying(255),
    longitude character varying(255),
    photo character varying(255),
    "isFeatured" boolean DEFAULT false,
    "isOpen" boolean DEFAULT true,
    "openingTime" time without time zone,
    "closingTime" time without time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 #   DROP TABLE public."Organizations";
       public         heap    postgres    false    4            �            1259    31297    Organizations_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Organizations_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public."Organizations_id_seq";
       public          postgres    false    219    4            �           0    0    Organizations_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."Organizations_id_seq" OWNED BY public."Organizations".id;
          public          postgres    false    220            �            1259    31298    Partners    TABLE     �  CREATE TABLE public."Partners" (
    id integer NOT NULL,
    "fullName" character varying(255),
    about text,
    "foodCategories" character varying(255),
    address character varying(255),
    "managerName" character varying(255),
    "managerPhone" character varying(255),
    email character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Partners";
       public         heap    postgres    false    4            �            1259    31303    Partners_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Partners_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Partners_id_seq";
       public          postgres    false    4    221            �           0    0    Partners_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Partners_id_seq" OWNED BY public."Partners".id;
          public          postgres    false    222            �            1259    31304    PaymentResponses    TABLE     3  CREATE TABLE public."PaymentResponses" (
    id integer NOT NULL,
    code character varying(255),
    msg character varying(255),
    data character varying(255),
    "topayUrl" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 &   DROP TABLE public."PaymentResponses";
       public         heap    postgres    false    4            �            1259    31309    PaymentResponses_id_seq    SEQUENCE     �   CREATE SEQUENCE public."PaymentResponses_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."PaymentResponses_id_seq";
       public          postgres    false    4    223            �           0    0    PaymentResponses_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."PaymentResponses_id_seq" OWNED BY public."PaymentResponses".id;
          public          postgres    false    224            �            1259    31573    RestaurantServiceTypes    TABLE     �   CREATE TABLE public."RestaurantServiceTypes" (
    id integer NOT NULL,
    "restaurantId" integer,
    "serviceTypeId" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 ,   DROP TABLE public."RestaurantServiceTypes";
       public         heap    postgres    false    4            �            1259    31572    RestaurantServiceTypes_id_seq    SEQUENCE     �   CREATE SEQUENCE public."RestaurantServiceTypes_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public."RestaurantServiceTypes_id_seq";
       public          postgres    false    4    237            �           0    0    RestaurantServiceTypes_id_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public."RestaurantServiceTypes_id_seq" OWNED BY public."RestaurantServiceTypes".id;
          public          postgres    false    236            �            1259    31310    Restaurants    TABLE     B  CREATE TABLE public."Restaurants" (
    id integer NOT NULL,
    name character varying(255),
    address character varying(255),
    email character varying(255) NOT NULL,
    "userPassword" character varying(255),
    phone character varying(255) NOT NULL,
    "numberofReview" integer,
    "averageReview" integer,
    discount character varying(255),
    coordinate character varying(255),
    photo character varying(255),
    latitude character varying(255),
    longitude character varying(255),
    "isFeatured" boolean DEFAULT false,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "foodType" character varying(255),
    "isOpen" boolean DEFAULT true,
    "openingTime" time without time zone,
    "closingTime" time without time zone,
    "serviceTypeId" integer
);
 !   DROP TABLE public."Restaurants";
       public         heap    postgres    false    4            �            1259    31317    Restaurants_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Restaurants_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."Restaurants_id_seq";
       public          postgres    false    225    4            �           0    0    Restaurants_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."Restaurants_id_seq" OWNED BY public."Restaurants".id;
          public          postgres    false    226            �            1259    31318    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         heap    postgres    false    4            �            1259    31534    ServiceTypes    TABLE       CREATE TABLE public."ServiceTypes" (
    id integer NOT NULL,
    name character varying(255),
    description character varying(255),
    photo character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 "   DROP TABLE public."ServiceTypes";
       public         heap    postgres    false    4            �            1259    31533    ServiceTypes_id_seq    SEQUENCE     �   CREATE SEQUENCE public."ServiceTypes_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."ServiceTypes_id_seq";
       public          postgres    false    4    235            �           0    0    ServiceTypes_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."ServiceTypes_id_seq" OWNED BY public."ServiceTypes".id;
          public          postgres    false    234            �            1259    31459    User_Orders    TABLE     �  CREATE TABLE public."User_Orders" (
    id integer NOT NULL,
    "CustomerName" character varying(255),
    latitude character varying(255),
    longitude character varying(255),
    email character varying(255),
    "ContactInfo" character varying(255),
    "PaymentMethod" character varying(255),
    "SpecialInstruction" character varying(255),
    "deliveryAdress" character varying(255),
    "TotalAmount" character varying(255) DEFAULT '0'::character varying,
    "PaymentStatus" public."enum_User_Orders_PaymentStatus" DEFAULT 'Pending'::public."enum_User_Orders_PaymentStatus",
    "OrderStatus" public."enum_User_Orders_OrderStatus" DEFAULT 'pending'::public."enum_User_Orders_OrderStatus",
    "OrderDateTime" timestamp with time zone,
    "DeliveryTime" timestamp with time zone,
    "OrderTrackingNumber" character varying(255),
    "UserId" integer,
    "OrganizationId" integer,
    "RestaurantId" integer,
    "DriverId" integer,
    "createdAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "PaymentResponseId" integer,
    "OrderedItems" json[]
);
 !   DROP TABLE public."User_Orders";
       public         heap    postgres    false    853    850    853    850    4            �            1259    31458    User_Orders_id_seq    SEQUENCE     �   CREATE SEQUENCE public."User_Orders_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."User_Orders_id_seq";
       public          postgres    false    233    4            �           0    0    User_Orders_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."User_Orders_id_seq" OWNED BY public."User_Orders".id;
          public          postgres    false    232            �            1259    31331    Users    TABLE     �  CREATE TABLE public."Users" (
    id integer NOT NULL,
    firstname character varying(255),
    "lastName" character varying(255),
    "emailAddress" character varying(255),
    password character varying(255),
    "phoneNumber" character varying(255),
    photo character varying(255),
    latitude character varying(255),
    longitude character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Users";
       public         heap    postgres    false    4            �            1259    31336    Users_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Users_id_seq";
       public          postgres    false    4    228            �           0    0    Users_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;
          public          postgres    false    229            �           2604    31337 	   Admins id    DEFAULT     j   ALTER TABLE ONLY public."Admins" ALTER COLUMN id SET DEFAULT nextval('public."Admins_id_seq"'::regclass);
 :   ALTER TABLE public."Admins" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209            �           2604    31338    Blogs id    DEFAULT     h   ALTER TABLE ONLY public."Blogs" ALTER COLUMN id SET DEFAULT nextval('public."Blogs_id_seq"'::regclass);
 9   ALTER TABLE public."Blogs" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    211            �           2604    31339    Categories id    DEFAULT     r   ALTER TABLE ONLY public."Categories" ALTER COLUMN id SET DEFAULT nextval('public."Categories_id_seq"'::regclass);
 >   ALTER TABLE public."Categories" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213            �           2604    31453    Contacts id    DEFAULT     n   ALTER TABLE ONLY public."Contacts" ALTER COLUMN id SET DEFAULT nextval('public."Contacts_id_seq"'::regclass);
 <   ALTER TABLE public."Contacts" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    231    230    231            �           2604    31341 
   Drivers id    DEFAULT     l   ALTER TABLE ONLY public."Drivers" ALTER COLUMN id SET DEFAULT nextval('public."Drivers_id_seq"'::regclass);
 ;   ALTER TABLE public."Drivers" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215            �           2604    31342    Items id    DEFAULT     h   ALTER TABLE ONLY public."Items" ALTER COLUMN id SET DEFAULT nextval('public."Items_id_seq"'::regclass);
 9   ALTER TABLE public."Items" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217            �           2604    31343    Organizations id    DEFAULT     x   ALTER TABLE ONLY public."Organizations" ALTER COLUMN id SET DEFAULT nextval('public."Organizations_id_seq"'::regclass);
 A   ALTER TABLE public."Organizations" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219            �           2604    31344    Partners id    DEFAULT     n   ALTER TABLE ONLY public."Partners" ALTER COLUMN id SET DEFAULT nextval('public."Partners_id_seq"'::regclass);
 <   ALTER TABLE public."Partners" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221            �           2604    31345    PaymentResponses id    DEFAULT     ~   ALTER TABLE ONLY public."PaymentResponses" ALTER COLUMN id SET DEFAULT nextval('public."PaymentResponses_id_seq"'::regclass);
 D   ALTER TABLE public."PaymentResponses" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    223            �           2604    31576    RestaurantServiceTypes id    DEFAULT     �   ALTER TABLE ONLY public."RestaurantServiceTypes" ALTER COLUMN id SET DEFAULT nextval('public."RestaurantServiceTypes_id_seq"'::regclass);
 J   ALTER TABLE public."RestaurantServiceTypes" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    236    237    237            �           2604    31346    Restaurants id    DEFAULT     t   ALTER TABLE ONLY public."Restaurants" ALTER COLUMN id SET DEFAULT nextval('public."Restaurants_id_seq"'::regclass);
 ?   ALTER TABLE public."Restaurants" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    225            �           2604    31537    ServiceTypes id    DEFAULT     v   ALTER TABLE ONLY public."ServiceTypes" ALTER COLUMN id SET DEFAULT nextval('public."ServiceTypes_id_seq"'::regclass);
 @   ALTER TABLE public."ServiceTypes" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    234    235    235            �           2604    31462    User_Orders id    DEFAULT     t   ALTER TABLE ONLY public."User_Orders" ALTER COLUMN id SET DEFAULT nextval('public."User_Orders_id_seq"'::regclass);
 ?   ALTER TABLE public."User_Orders" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    232    233    233            �           2604    31348    Users id    DEFAULT     h   ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);
 9   ALTER TABLE public."Users" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    229    228            �          0    31251    Admins 
   TABLE DATA           �   COPY public."Admins" (id, firstname, "lastName", address, "phoneNumber", password, "emailAddress", photo, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    209   :�       �          0    31257    Blogs 
   TABLE DATA           i   COPY public."Blogs" (id, title, headline, full_description, photo, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    211   ��       �          0    31263 
   Categories 
   TABLE DATA              COPY public."Categories" (id, name, description, photo, "createdAt", "updatedAt", "ServiceTypeId", "restaurantId") FROM stdin;
    public          postgres    false    213   
�       �          0    31450    Contacts 
   TABLE DATA           e   COPY public."Contacts" (id, "fullName", phone, email, message, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    231   ��       �          0    31275    Drivers 
   TABLE DATA           �   COPY public."Drivers" (id, email, password, fname, "lName", "idNumber", "vehicleType", "plateNumber", "driverRating", latitude, longitude, phone, photo, "isVerified", "createdAt", "updatedAt", "creditAmount") FROM stdin;
    public          postgres    false    215   �       �          0    31283    Items 
   TABLE DATA           �   COPY public."Items" (id, name, "deliverySite", "durationOnSite", description, picture, price, "isFeatured", "isAvailable", "createdAt", "updatedAt", "CategoryId", "OrganizationId", "RestaurantId") FROM stdin;
    public          postgres    false    217   �       �          0    31290    Organizations 
   TABLE DATA           �   COPY public."Organizations" (id, name, address, email, "userPassword", phone, "foodType", "numberofReview", "averageReview", discount, latitude, longitude, photo, "isFeatured", "isOpen", "openingTime", "closingTime", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    219   �       �          0    31298    Partners 
   TABLE DATA           �   COPY public."Partners" (id, "fullName", about, "foodCategories", address, "managerName", "managerPhone", email, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    221   #�       �          0    31304    PaymentResponses 
   TABLE DATA           g   COPY public."PaymentResponses" (id, code, msg, data, "topayUrl", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    223   ��       �          0    31573    RestaurantServiceTypes 
   TABLE DATA           q   COPY public."RestaurantServiceTypes" (id, "restaurantId", "serviceTypeId", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    237   ��       �          0    31310    Restaurants 
   TABLE DATA             COPY public."Restaurants" (id, name, address, email, "userPassword", phone, "numberofReview", "averageReview", discount, coordinate, photo, latitude, longitude, "isFeatured", "createdAt", "updatedAt", "foodType", "isOpen", "openingTime", "closingTime", "serviceTypeId") FROM stdin;
    public          postgres    false    225   ��       �          0    31318    SequelizeMeta 
   TABLE DATA           /   COPY public."SequelizeMeta" (name) FROM stdin;
    public          postgres    false    227   ��       �          0    31534    ServiceTypes 
   TABLE DATA           `   COPY public."ServiceTypes" (id, name, description, photo, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    235   ��       �          0    31459    User_Orders 
   TABLE DATA           }  COPY public."User_Orders" (id, "CustomerName", latitude, longitude, email, "ContactInfo", "PaymentMethod", "SpecialInstruction", "deliveryAdress", "TotalAmount", "PaymentStatus", "OrderStatus", "OrderDateTime", "DeliveryTime", "OrderTrackingNumber", "UserId", "OrganizationId", "RestaurantId", "DriverId", "createdAt", "updatedAt", "PaymentResponseId", "OrderedItems") FROM stdin;
    public          postgres    false    233   ��       �          0    31331    Users 
   TABLE DATA           �   COPY public."Users" (id, firstname, "lastName", "emailAddress", password, "phoneNumber", photo, latitude, longitude, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    228   s�       �           0    0    Admins_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Admins_id_seq"', 4, true);
          public          postgres    false    210            �           0    0    Blogs_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Blogs_id_seq"', 1, true);
          public          postgres    false    212            �           0    0    Categories_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Categories_id_seq"', 15, true);
          public          postgres    false    214            �           0    0    Contacts_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Contacts_id_seq"', 1, true);
          public          postgres    false    230            �           0    0    Drivers_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Drivers_id_seq"', 116, true);
          public          postgres    false    216            �           0    0    Items_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Items_id_seq"', 63, true);
          public          postgres    false    218            �           0    0    Organizations_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."Organizations_id_seq"', 1, false);
          public          postgres    false    220            �           0    0    Partners_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Partners_id_seq"', 2, true);
          public          postgres    false    222            �           0    0    PaymentResponses_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."PaymentResponses_id_seq"', 1, false);
          public          postgres    false    224            �           0    0    RestaurantServiceTypes_id_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public."RestaurantServiceTypes_id_seq"', 1, false);
          public          postgres    false    236            �           0    0    Restaurants_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."Restaurants_id_seq"', 15, true);
          public          postgres    false    226            �           0    0    ServiceTypes_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."ServiceTypes_id_seq"', 4, true);
          public          postgres    false    234            �           0    0    User_Orders_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."User_Orders_id_seq"', 26, true);
          public          postgres    false    232            �           0    0    Users_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Users_id_seq"', 7, true);
          public          postgres    false    229            �           2606    31350    Admins Admins_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."Admins"
    ADD CONSTRAINT "Admins_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public."Admins" DROP CONSTRAINT "Admins_pkey";
       public            postgres    false    209            �           2606    31352    Blogs Blogs_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Blogs"
    ADD CONSTRAINT "Blogs_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Blogs" DROP CONSTRAINT "Blogs_pkey";
       public            postgres    false    211            �           2606    31354    Categories Categories_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."Categories"
    ADD CONSTRAINT "Categories_pkey" PRIMARY KEY (id);
 H   ALTER TABLE ONLY public."Categories" DROP CONSTRAINT "Categories_pkey";
       public            postgres    false    213            �           2606    31457    Contacts Contacts_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Contacts"
    ADD CONSTRAINT "Contacts_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Contacts" DROP CONSTRAINT "Contacts_pkey";
       public            postgres    false    231            �           2606    31358    Drivers Drivers_email_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public."Drivers"
    ADD CONSTRAINT "Drivers_email_key" UNIQUE (email);
 G   ALTER TABLE ONLY public."Drivers" DROP CONSTRAINT "Drivers_email_key";
       public            postgres    false    215            �           2606    31360    Drivers Drivers_phone_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public."Drivers"
    ADD CONSTRAINT "Drivers_phone_key" UNIQUE (phone);
 G   ALTER TABLE ONLY public."Drivers" DROP CONSTRAINT "Drivers_phone_key";
       public            postgres    false    215            �           2606    31362    Drivers Drivers_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Drivers"
    ADD CONSTRAINT "Drivers_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Drivers" DROP CONSTRAINT "Drivers_pkey";
       public            postgres    false    215            �           2606    31364    Items Items_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Items"
    ADD CONSTRAINT "Items_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Items" DROP CONSTRAINT "Items_pkey";
       public            postgres    false    217            �           2606    31366 %   Organizations Organizations_email_key 
   CONSTRAINT     e   ALTER TABLE ONLY public."Organizations"
    ADD CONSTRAINT "Organizations_email_key" UNIQUE (email);
 S   ALTER TABLE ONLY public."Organizations" DROP CONSTRAINT "Organizations_email_key";
       public            postgres    false    219            �           2606    31368 $   Organizations Organizations_name_key 
   CONSTRAINT     c   ALTER TABLE ONLY public."Organizations"
    ADD CONSTRAINT "Organizations_name_key" UNIQUE (name);
 R   ALTER TABLE ONLY public."Organizations" DROP CONSTRAINT "Organizations_name_key";
       public            postgres    false    219            �           2606    31370 %   Organizations Organizations_phone_key 
   CONSTRAINT     e   ALTER TABLE ONLY public."Organizations"
    ADD CONSTRAINT "Organizations_phone_key" UNIQUE (phone);
 S   ALTER TABLE ONLY public."Organizations" DROP CONSTRAINT "Organizations_phone_key";
       public            postgres    false    219            �           2606    31372     Organizations Organizations_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."Organizations"
    ADD CONSTRAINT "Organizations_pkey" PRIMARY KEY (id);
 N   ALTER TABLE ONLY public."Organizations" DROP CONSTRAINT "Organizations_pkey";
       public            postgres    false    219            �           2606    31374    Partners Partners_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Partners"
    ADD CONSTRAINT "Partners_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Partners" DROP CONSTRAINT "Partners_pkey";
       public            postgres    false    221            �           2606    31376 &   PaymentResponses PaymentResponses_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."PaymentResponses"
    ADD CONSTRAINT "PaymentResponses_pkey" PRIMARY KEY (id);
 T   ALTER TABLE ONLY public."PaymentResponses" DROP CONSTRAINT "PaymentResponses_pkey";
       public            postgres    false    223            �           2606    31578 2   RestaurantServiceTypes RestaurantServiceTypes_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public."RestaurantServiceTypes"
    ADD CONSTRAINT "RestaurantServiceTypes_pkey" PRIMARY KEY (id);
 `   ALTER TABLE ONLY public."RestaurantServiceTypes" DROP CONSTRAINT "RestaurantServiceTypes_pkey";
       public            postgres    false    237            �           2606    31378 !   Restaurants Restaurants_email_key 
   CONSTRAINT     a   ALTER TABLE ONLY public."Restaurants"
    ADD CONSTRAINT "Restaurants_email_key" UNIQUE (email);
 O   ALTER TABLE ONLY public."Restaurants" DROP CONSTRAINT "Restaurants_email_key";
       public            postgres    false    225            �           2606    31380     Restaurants Restaurants_name_key 
   CONSTRAINT     _   ALTER TABLE ONLY public."Restaurants"
    ADD CONSTRAINT "Restaurants_name_key" UNIQUE (name);
 N   ALTER TABLE ONLY public."Restaurants" DROP CONSTRAINT "Restaurants_name_key";
       public            postgres    false    225            �           2606    31382 !   Restaurants Restaurants_phone_key 
   CONSTRAINT     a   ALTER TABLE ONLY public."Restaurants"
    ADD CONSTRAINT "Restaurants_phone_key" UNIQUE (phone);
 O   ALTER TABLE ONLY public."Restaurants" DROP CONSTRAINT "Restaurants_phone_key";
       public            postgres    false    225            �           2606    31384    Restaurants Restaurants_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."Restaurants"
    ADD CONSTRAINT "Restaurants_pkey" PRIMARY KEY (id);
 J   ALTER TABLE ONLY public."Restaurants" DROP CONSTRAINT "Restaurants_pkey";
       public            postgres    false    225            �           2606    31386     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            postgres    false    227            �           2606    31541    ServiceTypes ServiceTypes_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."ServiceTypes"
    ADD CONSTRAINT "ServiceTypes_pkey" PRIMARY KEY (id);
 L   ALTER TABLE ONLY public."ServiceTypes" DROP CONSTRAINT "ServiceTypes_pkey";
       public            postgres    false    235            �           2606    31471 /   User_Orders User_Orders_OrderTrackingNumber_key 
   CONSTRAINT        ALTER TABLE ONLY public."User_Orders"
    ADD CONSTRAINT "User_Orders_OrderTrackingNumber_key" UNIQUE ("OrderTrackingNumber");
 ]   ALTER TABLE ONLY public."User_Orders" DROP CONSTRAINT "User_Orders_OrderTrackingNumber_key";
       public            postgres    false    233            �           2606    31469    User_Orders User_Orders_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."User_Orders"
    ADD CONSTRAINT "User_Orders_pkey" PRIMARY KEY (id);
 J   ALTER TABLE ONLY public."User_Orders" DROP CONSTRAINT "User_Orders_pkey";
       public            postgres    false    233            �           2606    31392    Users Users_emailAddress_key 
   CONSTRAINT     e   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_emailAddress_key" UNIQUE ("emailAddress");
 J   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_emailAddress_key";
       public            postgres    false    228            �           2606    31394    Users Users_phoneNumber_key 
   CONSTRAINT     c   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_phoneNumber_key" UNIQUE ("phoneNumber");
 I   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_phoneNumber_key";
       public            postgres    false    228            �           2606    31396    Users Users_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_pkey";
       public            postgres    false    228            �           2606    31542 (   Categories Categories_ServiceTypeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Categories"
    ADD CONSTRAINT "Categories_ServiceTypeId_fkey" FOREIGN KEY ("ServiceTypeId") REFERENCES public."ServiceTypes"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 V   ALTER TABLE ONLY public."Categories" DROP CONSTRAINT "Categories_ServiceTypeId_fkey";
       public          postgres    false    3319    213    235            �           2606    31557 '   Categories Categories_restaurantId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Categories"
    ADD CONSTRAINT "Categories_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES public."Restaurants"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 U   ALTER TABLE ONLY public."Categories" DROP CONSTRAINT "Categories_restaurantId_fkey";
       public          postgres    false    3303    225    213            �           2606    31397    Items Items_CategoryId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Items"
    ADD CONSTRAINT "Items_CategoryId_fkey" FOREIGN KEY ("CategoryId") REFERENCES public."Categories"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 I   ALTER TABLE ONLY public."Items" DROP CONSTRAINT "Items_CategoryId_fkey";
       public          postgres    false    3275    213    217            �           2606    31402    Items Items_OrganizationId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Items"
    ADD CONSTRAINT "Items_OrganizationId_fkey" FOREIGN KEY ("OrganizationId") REFERENCES public."Organizations"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 M   ALTER TABLE ONLY public."Items" DROP CONSTRAINT "Items_OrganizationId_fkey";
       public          postgres    false    219    217    3291            �           2606    31407    Items Items_RestaurantId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Items"
    ADD CONSTRAINT "Items_RestaurantId_fkey" FOREIGN KEY ("RestaurantId") REFERENCES public."Restaurants"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 K   ALTER TABLE ONLY public."Items" DROP CONSTRAINT "Items_RestaurantId_fkey";
       public          postgres    false    225    217    3303                       2606    31579 ?   RestaurantServiceTypes RestaurantServiceTypes_restaurantId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."RestaurantServiceTypes"
    ADD CONSTRAINT "RestaurantServiceTypes_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES public."Restaurants"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 m   ALTER TABLE ONLY public."RestaurantServiceTypes" DROP CONSTRAINT "RestaurantServiceTypes_restaurantId_fkey";
       public          postgres    false    237    3303    225                       2606    31584 @   RestaurantServiceTypes RestaurantServiceTypes_serviceTypeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."RestaurantServiceTypes"
    ADD CONSTRAINT "RestaurantServiceTypes_serviceTypeId_fkey" FOREIGN KEY ("serviceTypeId") REFERENCES public."ServiceTypes"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 n   ALTER TABLE ONLY public."RestaurantServiceTypes" DROP CONSTRAINT "RestaurantServiceTypes_serviceTypeId_fkey";
       public          postgres    false    3319    235    237            �           2606    31567 *   Restaurants Restaurants_serviceTypeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Restaurants"
    ADD CONSTRAINT "Restaurants_serviceTypeId_fkey" FOREIGN KEY ("serviceTypeId") REFERENCES public."ServiceTypes"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 X   ALTER TABLE ONLY public."Restaurants" DROP CONSTRAINT "Restaurants_serviceTypeId_fkey";
       public          postgres    false    3319    225    235                        2606    31487 %   User_Orders User_Orders_DriverId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."User_Orders"
    ADD CONSTRAINT "User_Orders_DriverId_fkey" FOREIGN KEY ("DriverId") REFERENCES public."Drivers"(id);
 S   ALTER TABLE ONLY public."User_Orders" DROP CONSTRAINT "User_Orders_DriverId_fkey";
       public          postgres    false    215    3281    233                       2606    31477 +   User_Orders User_Orders_OrganizationId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."User_Orders"
    ADD CONSTRAINT "User_Orders_OrganizationId_fkey" FOREIGN KEY ("OrganizationId") REFERENCES public."Organizations"(id);
 Y   ALTER TABLE ONLY public."User_Orders" DROP CONSTRAINT "User_Orders_OrganizationId_fkey";
       public          postgres    false    233    3291    219                       2606    31494 .   User_Orders User_Orders_PaymentResponseId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."User_Orders"
    ADD CONSTRAINT "User_Orders_PaymentResponseId_fkey" FOREIGN KEY ("PaymentResponseId") REFERENCES public."PaymentResponses"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 \   ALTER TABLE ONLY public."User_Orders" DROP CONSTRAINT "User_Orders_PaymentResponseId_fkey";
       public          postgres    false    233    3295    223                       2606    31482 )   User_Orders User_Orders_RestaurantId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."User_Orders"
    ADD CONSTRAINT "User_Orders_RestaurantId_fkey" FOREIGN KEY ("RestaurantId") REFERENCES public."Restaurants"(id);
 W   ALTER TABLE ONLY public."User_Orders" DROP CONSTRAINT "User_Orders_RestaurantId_fkey";
       public          postgres    false    233    225    3303                       2606    31472 #   User_Orders User_Orders_UserId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."User_Orders"
    ADD CONSTRAINT "User_Orders_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES public."Users"(id);
 Q   ALTER TABLE ONLY public."User_Orders" DROP CONSTRAINT "User_Orders_UserId_fkey";
       public          postgres    false    228    233    3311            �   �  x����n�@���^xWe:WsY�\9%@��"+���m�?}q+�Ҩ���K�|:�{��pd�eӁy#d>��C� �D�$I4�hx�v�)4L�|���hU~�3�����#�HwKo�����~�e�� �����Y� � Bo0�Ax�L�0�}C��@#��bL��\���vQu���)�ۇ崀�ᴪ�%\�(�C�F�y�N�nͶ���P�U��=?�Sy�R}x�>�Ģ��$ȼ�4
Zр.S��>�|!:��M��oge(|�u'�K*���F���e~S����c�uF*y�,�}g$�ӯ����f!=���-� ���?��8�������Ԭ��զX�;�`��c�x�����T^�,��f�Ev�M;O%EN�[�'�W{�.�G�����E�=BM��i�      �      x������ � �      �   �  x�}��N�0E��Wx�jf�v�X$��nBkZCq�*��8�Cm!E�dn�3���71�6��*&������u�����UZ�y�f]�%[��uho�t�II�(�[3�3�G��2x🴘3Uh�Pm�*����Ǵ�U�}�G�k�Gd툩<X�$��!s �̒A�M\~�t³�����'��^aA��WRO��5��w��G {��n�9��r�ݖZKpr���G)�(��+��:���*�3?l�ݦ:]d���z����E O@{�|	 3�d �� G��[>��:�Zj�q��y�q��@:��۳�^/L�c�dmD6�9;,��҉�	�t ���V�n���L�Д���.�04#�H^��Q�̤�1�y�EQ�6�)      �   W   x�3���4��073551�L).*vH�M���K���LK)NIK�(�������4202�54�52W04�21�26�33��60�#����� �{      �   �  x�}��o�0şݿ���M��k;��R �)Ж��j��	i�WBF�_B�B�i����R�;���H0[�˯�"�k�Z�K�\R����	�כ��w9���__��`���D,pޚB4���>��n�O�o�'��Y�z���{�tV�UJ�(2.���|AA��
�ċ 2Y�J�\ب ���ˈ�Y�bh�*�s���@~�ߕ�B�z����`ex���yw��,eۖ�j���u07���n���:3͘�q�ޑ!q!䪊UD�'-�)S�A9mO\�B�A�Pn1�>!���õe-����x�}�KypcKG/�3�A�ƛ��og�Ǘ�SkN�W�z0�%6�Mf>��`{ u T������S���^�Zk����V��&
2�'�v�; ,�Mؑ^���E���>w������j�~͇����1i�6<�4d�O���̝7^z�G�U�M��LT�O�_��I�R����>�^0J�]N��P]�b��#���S\�qu���d����[��f����&���F��O>y�U>��D��d���l���_�Ys>�������d��w)��ibޚ��Nm��;R3)JsP�(5���؅_�q%����D���3vl�,���U�*�*�2�L�v�s��g���;o���;��v�nO�ݠw3m�����λ�{U]+�:�c�����w?���P���[h(���c��e�L�?�"+� WEc�B�	�V+����w����#=0�      �     x��VKs�6>ӿ��4 |ݚ���3n=�'�C.�"� m+�>KRR%JNG���ǒ�����!�_j]l�#��Օę�����w��}�z��+cª�_~�mP����>��wI�34�)vg�,(�I�� GZeu�<�Dw���K�j<)��ȺAwnr\�dm5~Y��ˋ�5�U�ܒBYk�{�ƄN�W]���B�VU��Y��Y�XJ��_�*�B����莱;�	�r��B�i"~��G�(��g n��T^���[��q# ��zP��5����o/��Zw�X +�t�go��x�
�m���ƒ9o���=�7���"���t�Bd��S�3&q��ba�q����f��5Ms����>���R�b�_�6��Ak�ţQ
`o'E|�5jm� �#IS6+��+@�<�YF<9G}b�gԌ?7ƐGը�5p���݉��X5�`��߄ƌ��ê*�xg��1�~
0�4Ψ� F�RZe��$D�����h��U� �آ�%���`�_7�K|��6��dè�bhG��g�x��4��q~�=�S�GYѳ�-L{p"xЯsA驎�9a+RW�����Z���˱�����ɻ=N�j���tdhT$"M�9��S�ɐF��c��<���ݪN����J��T>AW*�i���<t�c)������ؿ�&QN�ۉ���b.���a���h�^Y����Ӭ��,(ʸL}��e�xN�KB_��EY��i��Z陡Z5��F��w��Cb̛ĔH����3����ӂ�P��LKtI9�b)�\^PΉiG�KZF���hI�ُha9agh96�ia���:,�ô���~7-`�)i��R�5U=X?�2���>��k �gܴN���cܻ��H?������w�]4ӌ��� y����<ťfzbbl���	���ㅬ1�Gk�aY�	�,�h����� ���}�;*�h:���-r�|�e�/b��pt>��u�y��hG�$"bμ1��`���YNq���K�qL�0��777��V      �      x������ � �      �   }   x�}ɱ
�0 ���٥�z�-�$R�9��K��.��P�^�����N<��X��ÏF��zLi�s�,pa��QC.����:G�R����%�1���lU��ƶ�������!�)u5J�7~�,(      �      x������ � �      �      x������ � �      �   �  x�}�Ks�0��:����$K�)%��R ��	���Gb�|�
�6�>f<��h������M���IY�l�a�~�_����6��,Z����h��]�w[��fK�y_?/(Uǫ�e˶ë��y/k���f)5���e�ò�|r~�e�H$��J�����a-�A��Z
�һ�f=@Ƣ����3
�F2@n��Ō��!�!!(����?��Ƚx�@ ���~X��Sa���*�X�̢ϼݥ�䔷�y�G�&�XZ���b��Ӱ�����j_	]���d=8�7�~�~�7K:��.��N/)'t/۳��l����<e���}���Ћ���#��<���W�����ցC)(�	Rou@q�� �3���y� �!��K oWi��^��U�y\�9�Y���⫒_U�[��d���e*���<L���f����vǣŠ�/���o:��̧���./z�a�{o��V��y�>�B� rD��"�V���{(�L֒A m �I���D�v���@�Q���ʾ����P	O���X�E#�/�w�<��uT-�@�t��������������m�o�~}bZ�i�0���S;�ǰ�wi����I[���h!�kF�0 4��G��i��=G��z7��fPz ���?���W��j����#�      �     x����N�0E��/�l'Qۯ�ސPhB�iM�4�4��P�j D���{m" 쐤�^ə��2�t8��$����&�W�M$����>3�%d��=��HK%&?�"�h�7��P���Y�	��		�#�Y8��C��@�i��b�f�)p�x*�u8m+B~ěؘ��<�3�/�IJ�b9�τ\vV��Y�yw��#��Y��'���v�T��O��`��Ļ����]��2�Ƙ�;X��
i>��/w(��_�ݢ�lW~��=�޼���χ�i> Klˤ      �     x�}��n1Ek�+��p֯��J*��i�eX9���6 �>�Q��5g����5����*�^B�>����cy����5��s$�r�ł;��k�fֶOM���,S���P!k؄Ra�����K�����c�TX_g�C찜Eq(5L�ݤó�����4L��)�3l��q,l���RZk�4�k��7������˜�����!#L��Y�.�K��Rqe�ho�v�W{e��������a��	H}��������7����V���!��(��<�+      �     x��[s�Hǟɧ��:��M�4�O&���͸��bQDq�d*�}5^�!$����Vi$�����7� 5a ���-�9��5�8tG�*4�d���ѣ�쵅mQ�Z�-?|0��_ރhrb�ؖ�� �LQ�0G������9S���}�ۗ����6�Q�ݾL�Q�Î��dh�~��� ��d̏��~����ɎH�bw���.���\G�7�F}���:D����y�n��'�<�>�0�Nn �����> 
�q��ᩌ]��|��{��и�\�S��E�<7�d [)��8�[�,�5������/�d��r O����-��Z�2��x5t�w��H0�m��\΀�/g^�3r0w(��Đ2��i��r�<B�;9r�L^i������v$�`éi�*{�*L9��4U1�&+s�� la�Y,R&z�-A^-7U���W1[c dB5�T�  �@I�ll��b%Z��fT�AԂ� a!�R�ӦI���+]���e��4D4�B)G��8z�Q9�T���)��m�/Ym}z�~`y����.�(�(�����_�NN?B@�M������Z�Y��	���~\�!����?Ȓ�+5 �[fQ��}ѹ��S��L(�p6v�^Gz�y���Or�A�J������� w���"�<��A<�4	?���Y
>Ͱ"o`E�PŬ�D��	̆�f
����g?X�uV+\5+�$�Lު��y%o�n/�"V%�UĊT�
���ф�j����;����"V%�m��KI�F� ��T ¡��"4^���Y��y�Z���Gdt�2��в�KV�R]��8�Z�аZ3M&�_�/���*묢9�7b��k��L�aA�5᭚ꗷ?<V�v�,bU��6Y�E[	����문�E�.�UӾ�ߝ�N�CZĪ��m��KVچ�&��%u���aJ�0`�Z"�5�������];�\~���ѽə�a`�~�|�ݦ��n�L?4GO��(���O���/S�q��&3}�<J$�j����ߔM�P�q>al1-����:��i��~�B�s�'�&g)q&{Q��= �� �� "4�����(f�@�Y�k�\�Lj���N�n+�B^���r7��MD�֧�D�k�H�[�X��Uӯ�d(�x�/RHIg�kd�ѵ|[�ea��r�$��b�k�M�5R�Y��UH��f��v�_�AR�fl5�B$e�`�rDe�b���s�|ϒ�MH����t��ʚ��Q�&0�Bs�w�sʠ��|+�T�D���iX�����Ūf��f��K�`hL�v|ÎϼvWK�m���3���o�+K��W���2B�N�����A:o	_+�t���o�v�Ij� ���+���so����(H�Y      �   /  x�}��r�0�x�rKE�B,s�`�׉��c�a���<��q2U�.��˧� �6���q&P�����ʋS�oV���<�Jj%{��$�G��s[�<$$h�n�յY��g�&����V�'��(��B:V5�r~�PB�g�g
@�P��D�"��Y�zi����ip�{t
�"����(v�����}磵�4w��㩷��[��Gyqĳ�^�]-��":U9Uu��W�>�����py����Hb���6�S�Ͻ,H�{&'Is�v�����Ɋ�],Lǜ�bDG�i�����ְ�g�)GC�d�2�+�� `�f����]$)�G��E����'��I�Ӳ�̝�Jw��9��CKky�������аV�B�Ax�-�O�WS��d�WVJ0W�{��H��Zo��=�شjї��h�o)��\���J�\c�?�{f2*�9ID�eьZ�_��YJK�呁����_�_E���(���Ֆ�a\�f%�W�zxln����m"w��Fݶ����b0X0XQ�Hr�d��z �`�:.�;�HzŒ$����     