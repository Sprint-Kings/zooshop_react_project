PGDMP     *                    {            zooshop    15.1    15.1 Z    l           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            m           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            n           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            o           1262    57515    zooshop    DATABASE     {   CREATE DATABASE zooshop WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE zooshop;
                postgres    false            �            1259    106716    adresses    TABLE     _   CREATE TABLE public.adresses (
    id integer NOT NULL,
    adress text,
    userid integer
);
    DROP TABLE public.adresses;
       public         heap    postgres    false            �            1259    106715    adresses_id_seq    SEQUENCE     �   CREATE SEQUENCE public.adresses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.adresses_id_seq;
       public          postgres    false    231            p           0    0    adresses_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.adresses_id_seq OWNED BY public.adresses.id;
          public          postgres    false    230            �            1259    65820    brands    TABLE     e   CREATE TABLE public.brands (
    brand_id bigint NOT NULL,
    categoryid integer,
    brand text
);
    DROP TABLE public.brands;
       public         heap    postgres    false            �            1259    65819    brands_brand_id_seq    SEQUENCE     |   CREATE SEQUENCE public.brands_brand_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.brands_brand_id_seq;
       public          postgres    false    219            q           0    0    brands_brand_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.brands_brand_id_seq OWNED BY public.brands.brand_id;
          public          postgres    false    218            �            1259    106787    carts    TABLE     v   CREATE TABLE public.carts (
    id integer NOT NULL,
    product_id integer,
    count integer,
    userid integer
);
    DROP TABLE public.carts;
       public         heap    postgres    false            �            1259    106786    carts_id_seq    SEQUENCE     �   CREATE SEQUENCE public.carts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.carts_id_seq;
       public          postgres    false    233            r           0    0    carts_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.carts_id_seq OWNED BY public.carts.id;
          public          postgres    false    232            �            1259    65811 
   categories    TABLE     W   CREATE TABLE public.categories (
    category_id bigint NOT NULL,
    category text
);
    DROP TABLE public.categories;
       public         heap    postgres    false            �            1259    65810    categories_category_id_seq    SEQUENCE     �   CREATE SEQUENCE public.categories_category_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.categories_category_id_seq;
       public          postgres    false    217            s           0    0    categories_category_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.categories_category_id_seq OWNED BY public.categories.category_id;
          public          postgres    false    216            �            1259    57522    news    TABLE     �   CREATE TABLE public.news (
    news_id bigint NOT NULL,
    title text,
    author text,
    data text,
    thumbnail text,
    description text
);
    DROP TABLE public.news;
       public         heap    postgres    false            �            1259    57527    news_news_id_seq    SEQUENCE     y   CREATE SEQUENCE public.news_news_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.news_news_id_seq;
       public          postgres    false    214            t           0    0    news_news_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.news_news_id_seq OWNED BY public.news.news_id;
          public          postgres    false    215            �            1259    114950    orders    TABLE     �   CREATE TABLE public.orders (
    id integer NOT NULL,
    product_array text[],
    count_array text[],
    adress text,
    total integer,
    delivery_date text,
    userid integer
);
    DROP TABLE public.orders;
       public         heap    postgres    false            �            1259    114949    orders_id_seq    SEQUENCE     �   CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.orders_id_seq;
       public          postgres    false    235            u           0    0    orders_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;
          public          postgres    false    234            �            1259    65853    prices    TABLE     �   CREATE TABLE public.prices (
    price_id bigint NOT NULL,
    productid integer,
    price_small integer,
    price_medium integer,
    price_large integer,
    weight_small text,
    weight_medium text,
    weight_large text
);
    DROP TABLE public.prices;
       public         heap    postgres    false            �            1259    65852    prices_price_id_seq    SEQUENCE     |   CREATE SEQUENCE public.prices_price_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.prices_price_id_seq;
       public          postgres    false    223            v           0    0    prices_price_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.prices_price_id_seq OWNED BY public.prices.price_id;
          public          postgres    false    222            �            1259    65834    products    TABLE     �   CREATE TABLE public.products (
    product_id bigint NOT NULL,
    categoryid integer,
    brandid integer,
    name text,
    thumbnail text,
    color text[],
    description text,
    in_stock boolean
);
    DROP TABLE public.products;
       public         heap    postgres    false            �            1259    65833    products_product_id_seq    SEQUENCE     �   CREATE SEQUENCE public.products_product_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.products_product_id_seq;
       public          postgres    false    221            w           0    0    products_product_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.products_product_id_seq OWNED BY public.products.product_id;
          public          postgres    false    220            �            1259    106677    refreshTokens    TABLE     �   CREATE TABLE public."refreshTokens" (
    id integer NOT NULL,
    token character varying(255),
    "expiryDate" timestamp with time zone,
    "userId" integer
);
 #   DROP TABLE public."refreshTokens";
       public         heap    postgres    false            �            1259    106676    refreshTokens_id_seq    SEQUENCE     �   CREATE SEQUENCE public."refreshTokens_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public."refreshTokens_id_seq";
       public          postgres    false    228            x           0    0    refreshTokens_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."refreshTokens_id_seq" OWNED BY public."refreshTokens".id;
          public          postgres    false    227            �            1259    98525    roles    TABLE     X   CREATE TABLE public.roles (
    id integer NOT NULL,
    name character varying(255)
);
    DROP TABLE public.roles;
       public         heap    postgres    false            �            1259    106688 
   user_roles    TABLE     a   CREATE TABLE public.user_roles (
    "roleId" integer NOT NULL,
    "userId" integer NOT NULL
);
    DROP TABLE public.user_roles;
       public         heap    postgres    false            �            1259    106668    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    first_name character varying(255),
    last_name character varying(255),
    username character varying(255),
    email character varying(255),
    password character varying(255)
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    106667    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    226            y           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    225            �           2604    106719    adresses id    DEFAULT     j   ALTER TABLE ONLY public.adresses ALTER COLUMN id SET DEFAULT nextval('public.adresses_id_seq'::regclass);
 :   ALTER TABLE public.adresses ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    231    230    231            �           2604    65823    brands brand_id    DEFAULT     r   ALTER TABLE ONLY public.brands ALTER COLUMN brand_id SET DEFAULT nextval('public.brands_brand_id_seq'::regclass);
 >   ALTER TABLE public.brands ALTER COLUMN brand_id DROP DEFAULT;
       public          postgres    false    218    219    219            �           2604    106790    carts id    DEFAULT     d   ALTER TABLE ONLY public.carts ALTER COLUMN id SET DEFAULT nextval('public.carts_id_seq'::regclass);
 7   ALTER TABLE public.carts ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    232    233    233            �           2604    65814    categories category_id    DEFAULT     �   ALTER TABLE ONLY public.categories ALTER COLUMN category_id SET DEFAULT nextval('public.categories_category_id_seq'::regclass);
 E   ALTER TABLE public.categories ALTER COLUMN category_id DROP DEFAULT;
       public          postgres    false    217    216    217            �           2604    57541    news news_id    DEFAULT     l   ALTER TABLE ONLY public.news ALTER COLUMN news_id SET DEFAULT nextval('public.news_news_id_seq'::regclass);
 ;   ALTER TABLE public.news ALTER COLUMN news_id DROP DEFAULT;
       public          postgres    false    215    214            �           2604    114953 	   orders id    DEFAULT     f   ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);
 8   ALTER TABLE public.orders ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    235    234    235            �           2604    65856    prices price_id    DEFAULT     r   ALTER TABLE ONLY public.prices ALTER COLUMN price_id SET DEFAULT nextval('public.prices_price_id_seq'::regclass);
 >   ALTER TABLE public.prices ALTER COLUMN price_id DROP DEFAULT;
       public          postgres    false    222    223    223            �           2604    65837    products product_id    DEFAULT     z   ALTER TABLE ONLY public.products ALTER COLUMN product_id SET DEFAULT nextval('public.products_product_id_seq'::regclass);
 B   ALTER TABLE public.products ALTER COLUMN product_id DROP DEFAULT;
       public          postgres    false    220    221    221            �           2604    106680    refreshTokens id    DEFAULT     x   ALTER TABLE ONLY public."refreshTokens" ALTER COLUMN id SET DEFAULT nextval('public."refreshTokens_id_seq"'::regclass);
 A   ALTER TABLE public."refreshTokens" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    227    228    228            �           2604    106671    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    225    226            e          0    106716    adresses 
   TABLE DATA           6   COPY public.adresses (id, adress, userid) FROM stdin;
    public          postgres    false    231   �d       Y          0    65820    brands 
   TABLE DATA           =   COPY public.brands (brand_id, categoryid, brand) FROM stdin;
    public          postgres    false    219   je       g          0    106787    carts 
   TABLE DATA           >   COPY public.carts (id, product_id, count, userid) FROM stdin;
    public          postgres    false    233   �e       W          0    65811 
   categories 
   TABLE DATA           ;   COPY public.categories (category_id, category) FROM stdin;
    public          postgres    false    217   f       T          0    57522    news 
   TABLE DATA           T   COPY public.news (news_id, title, author, data, thumbnail, description) FROM stdin;
    public          postgres    false    214   Ng       i          0    114950    orders 
   TABLE DATA           f   COPY public.orders (id, product_array, count_array, adress, total, delivery_date, userid) FROM stdin;
    public          postgres    false    235   E�       ]          0    65853    prices 
   TABLE DATA           �   COPY public.prices (price_id, productid, price_small, price_medium, price_large, weight_small, weight_medium, weight_large) FROM stdin;
    public          postgres    false    223   ��       [          0    65834    products 
   TABLE DATA           r   COPY public.products (product_id, categoryid, brandid, name, thumbnail, color, description, in_stock) FROM stdin;
    public          postgres    false    221   ��       b          0    106677    refreshTokens 
   TABLE DATA           L   COPY public."refreshTokens" (id, token, "expiryDate", "userId") FROM stdin;
    public          postgres    false    228    �       ^          0    98525    roles 
   TABLE DATA           )   COPY public.roles (id, name) FROM stdin;
    public          postgres    false    224   ޵       c          0    106688 
   user_roles 
   TABLE DATA           8   COPY public.user_roles ("roleId", "userId") FROM stdin;
    public          postgres    false    229   �       `          0    106668    users 
   TABLE DATA           U   COPY public.users (id, first_name, last_name, username, email, password) FROM stdin;
    public          postgres    false    226   >�       z           0    0    adresses_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.adresses_id_seq', 92, true);
          public          postgres    false    230            {           0    0    brands_brand_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.brands_brand_id_seq', 12, true);
          public          postgres    false    218            |           0    0    carts_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.carts_id_seq', 21, true);
          public          postgres    false    232            }           0    0    categories_category_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.categories_category_id_seq', 20, true);
          public          postgres    false    216            ~           0    0    news_news_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.news_news_id_seq', 5, true);
          public          postgres    false    215                       0    0    orders_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.orders_id_seq', 3, true);
          public          postgres    false    234            �           0    0    prices_price_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.prices_price_id_seq', 20, true);
          public          postgres    false    222            �           0    0    products_product_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.products_product_id_seq', 20, true);
          public          postgres    false    220            �           0    0    refreshTokens_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."refreshTokens_id_seq"', 227, true);
          public          postgres    false    227            �           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 39, true);
          public          postgres    false    225            �           2606    106723    adresses adresses_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.adresses
    ADD CONSTRAINT adresses_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.adresses DROP CONSTRAINT adresses_pkey;
       public            postgres    false    231            �           2606    65827    brands brands_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.brands
    ADD CONSTRAINT brands_pkey PRIMARY KEY (brand_id);
 <   ALTER TABLE ONLY public.brands DROP CONSTRAINT brands_pkey;
       public            postgres    false    219            �           2606    106792    carts carts_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.carts DROP CONSTRAINT carts_pkey;
       public            postgres    false    233            �           2606    65818    categories categories_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (category_id);
 D   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
       public            postgres    false    217            �           2606    57552    news news_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.news
    ADD CONSTRAINT news_pkey PRIMARY KEY (news_id);
 8   ALTER TABLE ONLY public.news DROP CONSTRAINT news_pkey;
       public            postgres    false    214            �           2606    114957    orders orders_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
       public            postgres    false    235            �           2606    65860    prices prices_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.prices
    ADD CONSTRAINT prices_pkey PRIMARY KEY (price_id);
 <   ALTER TABLE ONLY public.prices DROP CONSTRAINT prices_pkey;
       public            postgres    false    223            �           2606    65841    products products_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (product_id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    221            �           2606    106682     refreshTokens refreshTokens_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."refreshTokens"
    ADD CONSTRAINT "refreshTokens_pkey" PRIMARY KEY (id);
 N   ALTER TABLE ONLY public."refreshTokens" DROP CONSTRAINT "refreshTokens_pkey";
       public            postgres    false    228            �           2606    98529    roles roles_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_pkey;
       public            postgres    false    224            �           2606    106692    user_roles user_roles_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_pkey PRIMARY KEY ("roleId", "userId");
 D   ALTER TABLE ONLY public.user_roles DROP CONSTRAINT user_roles_pkey;
       public            postgres    false    229    229            �           2606    106675    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    226            �           2606    106724    adresses adresses_userid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.adresses
    ADD CONSTRAINT adresses_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
 G   ALTER TABLE ONLY public.adresses DROP CONSTRAINT adresses_userid_fkey;
       public          postgres    false    3249    226    231            �           2606    65828    brands brands_categoryid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.brands
    ADD CONSTRAINT brands_categoryid_fkey FOREIGN KEY (categoryid) REFERENCES public.categories(category_id);
 G   ALTER TABLE ONLY public.brands DROP CONSTRAINT brands_categoryid_fkey;
       public          postgres    false    219    217    3239            �           2606    106793    carts carts_userid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
 A   ALTER TABLE ONLY public.carts DROP CONSTRAINT carts_userid_fkey;
       public          postgres    false    3249    226    233            �           2606    114958    orders orders_userid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
 C   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_userid_fkey;
       public          postgres    false    3249    226    235            �           2606    65861    prices prices_productid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.prices
    ADD CONSTRAINT prices_productid_fkey FOREIGN KEY (productid) REFERENCES public.products(product_id);
 F   ALTER TABLE ONLY public.prices DROP CONSTRAINT prices_productid_fkey;
       public          postgres    false    223    221    3243            �           2606    65847    products products_brandid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_brandid_fkey FOREIGN KEY (brandid) REFERENCES public.brands(brand_id);
 H   ALTER TABLE ONLY public.products DROP CONSTRAINT products_brandid_fkey;
       public          postgres    false    219    221    3241            �           2606    65842 !   products products_categoryid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_categoryid_fkey FOREIGN KEY (categoryid) REFERENCES public.categories(category_id);
 K   ALTER TABLE ONLY public.products DROP CONSTRAINT products_categoryid_fkey;
       public          postgres    false    217    221    3239            �           2606    106683 '   refreshTokens refreshTokens_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."refreshTokens"
    ADD CONSTRAINT "refreshTokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
 U   ALTER TABLE ONLY public."refreshTokens" DROP CONSTRAINT "refreshTokens_userId_fkey";
       public          postgres    false    3249    226    228            �           2606    106693 !   user_roles user_roles_roleId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT "user_roles_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES public.roles(id) ON UPDATE CASCADE ON DELETE CASCADE;
 M   ALTER TABLE ONLY public.user_roles DROP CONSTRAINT "user_roles_roleId_fkey";
       public          postgres    false    3247    229    224            �           2606    106698 !   user_roles user_roles_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT "user_roles_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
 M   ALTER TABLE ONLY public.user_roles DROP CONSTRAINT "user_roles_userId_fkey";
       public          postgres    false    229    3249    226            e   g   x�-��	�@�I� ��m�
,F�*��a�D�^:R���Q]q(ȲJ�����2V�8��aǅ���b��fo����M�L^[T�Mε2���--      Y   |   x�3�4�0��& ��e�%�d�q���y�%\&�F%�@L��Qb�i��X�����ed�TX��E aCNC3΀�����J.CC?�(�"3����qO�/*�I,.����� i�.�      g      x�32�4�4�44����� 3�      W   !  x�]PKN�P\?�"'@}-�rCS~R��`G+!$اQ�M�0�c'ݰ�^���x>t�w��p@�7�d��N��K͑p�Y�[G]��L���lX<���@a
)C�^�C	G�|G�>7^i%:ׯPf���:���y0�]Q�G%�}˲�
D�2���9�:�������K*�8%Lh2
�3�+O�o��I���	p���I���8�L�ӒU>3F����3ϓ���/q���!A�w�t׾�qu%�)?g�3#��n��[�dn�����\?r����n�3�8��zv�w}&"Fm0c      T      x��|ێG�������cd�$�-��@([�U��*T�-h@�A2]��E?�a����̼���a�����;/,�{3�a�ȼD��{��/ܤ2�Kv�BU�m�}�֩�B�6���������=��m�k�����:i�i��'�T~�|�΋�|���_>y���?�on���!��p��n���_��ɓӧO���?��k�M��=����Ync����lS�*�2�*�6�>o��8�,T�q�����v�6V�j�O��n�l�6Y���,ԩ��z��bu����.�¬iS}�r|���;�����Gm�]����8o�yu�QmC�d��4�� �޷8��:k�U<�[���#Jxo�-S*�U�����C�9�ִ����هv��6�C�m��+�*�x����y�	#X&�`]��[�P�EQ�}��C��4|��c�-�d��gӕe�g�\B&m�l�}�t7�����o]��;��j�U�������Y�ʇ�-ou]u�	4x_�ٶ&�T�j��w�W��Ǽi�x�^]����qI�Q|�h��L���g�b5�];�H�/�MƟSW��z�8dM�%��]�`�����6�]�(������d�E���S�	��v�>tk����"���ﰦ�Rr%y�w|z�5���z}��M��"�c�h'�XE�\ۯq��%|�NjVx@6Ѥ�y�R�bbT+��8dsU��F�]!-�������Ps��]�7�w����h��m޶y�=GZEή³MK[	=	��b|�����"b$�h)$�0T��"Է��]�>?e��[���i�:̋p�|���aœ��+�2�&��K��,;���Ų]�N�x����6@����Ln)f��7���X4�g#���c�����O�Pۇ}*�}�"��p��J.��q��9.,�Ĵ,R�e=ēc�Y�B8�:��a�~��ٚ�&��]{��aNԩ$FgaY��m^エ���H�����U(�&u�`��T�}Zu,F��*o���|*���Vk�m3��2nB�`Bk�6�X�|G�Yč�p����o<kd��ួ�eA�6�Ml���r����M|O!bB�YH}k�E�d!a���*}�I8q,D�n�����uL��J�r��jO/!r�uĒ]F��Y���㔂R�f������(#��<�_����6& J4jдu*�X��9������;|q��b�._|���1�s��֞�푯�����E�4�G����O+��*�2]V��A���[�%���Ep�^D|s�}SRq���.w�d�(�+��6�T��#L�/�T�Eل�֗�k\I��`R�I�Zw�O��#��%���`8#���8�KǇU^�k n�ϘKFU��.pe4� Y���P��$-�Y�]�F���푺��1���!ԫ�z��e�
���&�Є������?Vf
�b'%p��+�Uej�;��^���i�����i�uNXz�שP5�����^DH���6 9�A=�	�ml��P�%k��!�B׽;�&r�@i�����Z�\,p�`D�J��5��΁-;.�<S����3:I�D˒<�x���n)�<π9[��>�����u�君H�.ӝ���-f�UlӽP�2?ɞw���*�XgH6{��5����x����g�@�]����ea-���%�|� L���8!�� �Υ�5ꁍi���a:��Eq�MFN�1�'!�2�c��Lʵ�.����`�?/�'�:�ϗiƯ�滏|�و�@1qi��C�$����m;8��1	��5,��\�30�|��Do��|��sN�$5lax&@N�z��
��"T���׀2�G��e�qg�d�hs�AU��7 m{�w�e���}��dD4c���{��ɋFXq����n���Tu��oSP��q�i:^i�e"�"�1�.��nG�ɫV�8<׷�h��D�U17^[�թ��>������0�s�zx!D��Ɂ�>��5@�ꘃj���jP�s��tkst1,����d����;o�� +���9A.7X�?~��O=8/wa�~�]֩��6����$�=���k�v����>��E�o������O�|r�h~�����%mp~�w�%���B>r�C��ס,�.ࢄk�P�f~s��ί�\�/,���GC0����WO=�������`842�%w�4���/�N�d*�52P�f�Y��-ՐԓpˋI����b�.=�2��6�.�{x5��d��"��1d�����8/zÇ�`=�o�~�X�چ��M�]c�8���w��b��	 n��n-z$�'��]���s���@����/�>��EGT�>}����޵A	W	�%�����V���Ts`���f��ȉ�Ƴv�t|�z�!�]�.�].�U\�%���|P@R*Ox8��8�s�2狣Q@�+�dY�ʰL��領�(��H��<b��>�v���1�!���΂�ObP�u�̃�����H�Ӏ_��0,�"��J�}�\�uk����W��;�y������iS.�7�Z�U\�[q�DU�,���\�t�#��Q�Ƽ�¶��b��<����G���*],_ð��G, �J�Rv���c��-��W���V��]R:d���QR&j�Ti��[�]� �bظ�L��z�K%���:��� 	H��̀�1�H�h��I�bq���
�-������̰7��#��0D�X��bb�t�"A ��|���J2pB��G��k��aymbZ�
yC���33Y�"�w�|gC�$� ��� ��%�z���f�b;�M�)1)���Xe��A+3���hˠ��묷�U��WM��k��� �0�C/Y/͒Vu�
{��@Z�!�����zU����ZK`E��۸��kD�wT��_��X�rx��Qy=NBr������~����gS���Z�~���Q;%�D����6,r��&صU�W �~E+͛���XlL�+�$5�?4mc9(��%�6�y��,��_��0���
������XkE��f�O//�~&�K{u�ɨ����2��� Q���� 9��2<�C�D&��ǧ����^�2|.׾O�l�9i)XC�*�m*�f����k�-�Ta� &�{(��Z{/k���D�M
spQ�K�?��:��au��ay��	�� `�U��_�;�^70ǆ��x�af��s�!�r�r��� ����w	̧����o��'���|�y���qN����q՛�S��r�JӪ��#J��^ޔ����By�&V�|�0�@��+e��ч4�״h<)��iy[DK�H�ޘ<�0���� K�E�>Z9	��������_��	1"�kC�s�M���[�:��t�A�z�=��˙�P��D���(�a��?K,ަS���OT�j���b�LL!N���-R�(@[�-~J]SH�a<����pOJ��*s�w&8�W���%���MƱ�ef�)!F>��]�j6��k��`���P���*�ETF���X ^��A���7�9���4�
T /4��X�d��V����W}�a�r��{A��:�n�>�ؚ[v2�ֈ��	>ar\	19N���<"��~M��~�/I	�Ѩ������o�*��P�� ����1����R��$�>�Wa�Ak��U fG�>�8?�_Ԯ'qS5��&�.�������9P�`���{=��jߙvR�O��ʰ.���fLs5
� :\yĬ�Rl�������.�QC��*�PV�wY�p�Ch`ĩ���<\��~m\�9�}��L�{��hI7��z%���D�rb_;i�jF��e�X4��V���\��+#�νD<S$Z�O��S�U�����3����? Qi���k*����FV�΄������|A�3�):G�3��A�	�n�_s���1"�e%�*��	`�e&z����w^T�. �G�eZ/a��{����sJb�����Z�!�Ӭk�2�x�C�
N�    �2��X*8>T�!��Kk@r,��?gs���U_�0W��"� IS}e���]�{���
<�.긡j�e���c�1��9� �,sO�f�;[
c$�2�$vЮ�@hrk<">�~t��3�p��v�\O��aS�Kxf��E8�z�������cI����))�4�?�Hv(�y����I��Ôۂ��д~M��W�5�Qґ4���U9`*g]�����m=ñ�w��UVE�Z�.WVX-�X�ѳ^�wt�����c�BK��_ ���ǿ�_���+���;ʅG�6��x
�Xd���m�q�8I46y�^�����4^�gSvG����dk��+A��w F
��zc����O?��R[৆!X-޷��_���@�߄C�j�_=���~��W߽Le|wS��x�2߽�Đ޽�ڧ�F��������0�w�;��w����tl�z���ӯ>}�V�<��T�بz,�� a]���a
�[5_4���YL!ٴ렇�Ԉ'�Wc�Z�y��D�;�4��}k
h'��RNJJ]n0V���hޠ��`�m�A��}�j@�ѓ ���P꛺�ʶ�wތ��[���RҺ�ᩂ�X k�IƺU��d/-���ÁY�'��V�<����:Fb�����P���k��YS3���T������Ў������r��y�F,�#���t����<�+h,[ϲo�$�@~Pj�߳��x�,�o̑�Vg
��܊u��C�{�TTk����0R�iK�J�T�}�X�������& ��XO�Z�UU�T���Z��Ff��|��!5gF��Y�H�lԪ�n�\���E��pU����;).`_C�-o^��J�Vyz~(]�R-iۼ=��-.=����9�̔=��e�H�C��mL��J�Qn�����%_`a�[7Y�SE�	R�	U�?F��Z[O���,WQ�5Yꡤ��(e�����l�4��+�$�]%'V�	��V��]^��s�R�*��(��k�,V<��C[���}Zc|{H����!ػ�(L�	M,��^a�Lr�j��D@z���&:V��V�~v7�����֨j{���w�TH���%����d��@�I"�M���6'*玏�J���ǿ`=�ao������og�[�Vc��8m:�%��ޖQ���٨�ԫ��\@��i ��kz����=��
ٗ7;�	]�1$^]��A�᠏-��=RzN�o�x!t��[�>���w*H�A@�|�}��Hv6#��� �Mu�����o!�o��19:{�\<��	-n��
���Њ�%���]oS�������G�߅��W'��|�����]�Tᯏ�|�Փ���f�VS��Er���{�e�Ƴ��ӵJ��.��!�g�I>b�$�&��^���}S��L������\�x
1eB6xPپ1�h�O[��m̼�3}i�n��1�;V#[�z`}���sV�v��A�c?i�8Κ�!m���3�i�T�O��v����0�~�"¾>���f���;�_�"����A�.���uK<9=�7��✁=4pX�w����1&[*�V=:����Z!�W	�
9̅�w��l�_�F���I��l���
��J5μW����� >�݊☷��#�C���Sor�-ޔ/2��K$��W��Բ�ƃp�s��ZD�-��0�W���[�1�&ur�ٕ�C�x'C���ܧ�6Ė%�g�q����?s�q�aN�C���3"��f��4��@�Vi.<������Q7'=jA���"��Io����v�N��}�Q���y�4^�z�������7��˳�dW/�o�˳�g��ׯ/n^f��~|q-�U��ʨ�� ��m���%�8ۦ��b���UU!t���j�f1�T��/�%!T�R�	T19�=Ț��qo 9�п,��uZ��۸�D��5���{r�ze�ao�v��5��!�"5��{�_)��2^ػ�����G�.�9E��(_U��*LI��w�^q��W5b��j�2�[����X��E�u$��U�O�s�L�C�̩�
����og3��8GC�T���!iWg�0 ��o!&�-���J�����W�b�v]MB�f����8�}jue���t��J���~Y@M�9��n��T&+Ƽe3x����R�Y|A��b�fU��%N��Z�9o�q�|��:�IG���z����G� -��h-��٧U��i��)\���;�\�p��������S�u�����>��ƣ�0�j-��q^��x;�~y��}v����|��|��Ջ_2�6��˪-dx	Ye?S���Jsj���Z/K��r(HNZqet,E��Vs!�W/��IG�^���P�����,m�Yb+3l�q|�6�כ�Mq�B�k�1�ڞ���r�V�����z�#��З�G�b
�<Ɲ�z60-�E�:U��8�+�)x	=9X�GYn�7#}Z�1��v0W�����,'Qq�@�W?�I̊�3/q#̮}*n��@j��Cy_I��]5 �V]�{s��^ӰK�T��Y�ǩ�	��|g\�%z�M�O�H`a��V�[�,�ֹ�;߶'Kk�(���g{�Ln�T��5ݮ�LW��Vr��[?�i|�1��Q��/�l&:ë��Æ��J)/�X	�tV��L{Ek�a[�Dt뱫���Zy����.�a3���{4D3���7��󫫋+��Y�������7/�7g7�o�^e,�r��`�o��Eyƌ#��7ű�!�Rȩřl�ί��\���Ҧ���d�M�]�]ut*�͗i�p�^!A�}  dI�&��4"��JHy�\�FUA�m��`�'��)l�>��98Z��j��zv߯`k�x���2�[	Z�SX�so*��L:�N��fn��l_��VJ��7#B���s��դI�H�r�G�����Kzw���{��	/�#�>-i�@׭�U�r.���?S-��k!Z�����s���,��VV���x/*����@7�S�� 4/u/�1M��$����6%ߙhb�[��H��>NyQ�,��8�!e?���^a��g��i��~+Ohz4��b�h��@��w�u)k}_��B;��Hx�Nͨߦ�u���-[S�I%Yn"�"�)��C��f�c�}8>T��C7���rCG�*�ZN�앀����':�߽8��W�7��g�?]e�7g@��ח��2�-Kb'd�����������*�Z���q�T�~u�%��9b����o�UZ�_Zx�3W;+��C��uT�5�&�dט�8��
E"Y��/�MC���7��ܭ�j�V����z�U�K�ZsZ�F���v	��l=�֊X/���Q����[�_ǩ��K����2��,�yYsx��AP�so�rȫ[z1��]q^�]�4RY@��E��|q�he����lQ�P��íY�і��;����|w�N#�n���j�Yc�H2T�i�X�u���³�|������.�֦p���NY��j[g����ڂ���޲�tYz�h3�s���x�ݼ|�}��>�>{�����:������"��:;5S����B�7*|4�������T��}q���o������ݪz83�����C2#�SoD��_&�ɞ+���VP��w���u"v!���sĻ�y�0�1ǖt���!�k�����X��.�(�AqӨ��p�|�0,���������T� �[U�7��\�d3F�2-n>�u+Y�Ȇ@�,'
���s����qo9b��W�d0�9�&���	�Yf,�B�5�<�ܘ�B�g�	U��*�ŕw&Mw��И�2@�,�j�*�b�=:V��N�/����j�J=��2�T	VErV��ea>r���m;o(��;Zh'���Y�G���%��pf>J�S�Lt�P*�1?���7��԰w¯�3ն��y,��)�A������O0c��i��ۼ�P��?��,=pz|�����O�z�h1�t������q�tq������q\~u���/N�?�ꯏ�>����Df��?~�n�U!X{��N]�0׺gH��β�~9��7$IP� �  k�5�m�[����}���=;ݬ��Xزs]�g�Sg��l��b�JZ�*��<�R:�D-��g�>������M߭���7�nw�ygX��%|�­	5Y^��3���C�z߉X`�4|�2V�SU��\��o��55bs�ׄ��8|P�v��*���?��@|��H�8,�5/Z瞑{�F���h�$�tc[�U��`���W���v7t����!�<�8(�ƚ�ecs���wT�8���r2PU��\<W1�'Ƈ}��:��_�Bp�3��6� [����Tɖ�c�%-�]��*�)���ܻ%�%c����5���n����.پ�I����[V�ط�Ӕ��KV��;�=�̞O�&n���x;ҹ��Nh�@T��C0S�t͒��d�^��ť�#5��Ɠl���n{�d�i��j�� �"�mf�bk>U&�����C�-���"H��D3lnM��k9�'�J�?6���A%O���2,gE����9�Rm}���3_�}��B��,|�''�
C���koT){n,y��I�� g�V}_���c0�;�U�7"���b�XDæ��+�'�Wo��Vo�.��{�ݪٲ��� T�n��c�� 
ו����5Y -���m�s41��.c(�~*}A��Zz�d��~���%���M�z�N>Q���7�}r��?��� �QU���{�}ne��!�m	����C�H�d?J�X���3�����\hNc�q0+?h�!c�YxN�-e*֪NCi�cd4��rЊ��N蘉fP�2�P�44ԩ)U�����v,j�"�k͖J�����g1����~N�.C�a�,d���-�߿���z�-�^egg7٧g:Gk~�7��}f].�w1g/m�_�륷��T�[�^�5��̊p��,0�4��zgvx׀z���џmUZ��A�_qef#^"�<����_�YVBO� /�g��t\vT�뎻1���	U�e��Y�S�"6�i�Zٔ��d{.���І�T��
�V�x�����.,@�Y��B����@s�@�πp��M~]�{K�V�L��:��~�U0��ś�������W�o_\��k��'GdBC0�lUw��R���Fv���Ж^�N0�ll�~cven�$=�9�םd/s6z/|�$s�)S�-P��~Y҉N�
�p�6�f��o-3��TݍM��ީ��l���z��v�E����e����;�����G�@�C⵷OvY4٨e�$�=FЄu$��2����~��Tmd��N�Q����4z�ȍ�/��xh�PM���&�Ll�}��L�n92/)�q���8aQ���B�`��Nvd7��:
���)�4o]/CC�"ʼ�46����2�I8��!�G�9�=QLT��>�9�T��û��=�'%�����L��D�'�L�4'���p��N�.0�R�Xm�vȀE�M�����;����R6l�t. �3]U��>���˝�=�S��:+Ri�% �1�"O��t?�(L(�%!pHeΕ��Ȣ<ε^(�V��9��,/�%;4>��1�g�6����C!���e�O����/-�i�.�ë-h�b�����=t��]���J�f�&W��~/�
~vȉ�1���$ָ<͜T���mNbx���;����]A��[%��{*��2<�l}Ǟ\pa��.�ˠM�~����2�lթ�����W�Ӳk���AU��+h������u�|˧�|~}~s�ר�D��x�I`3��������ov�>k*��� s���m{��5z��!}2D�ᨔ�_��9�u���I|����)�	tM;��ڶ*i?[�;��f�a�guC���L]I�*���n��֗GA��z��S0C���ѝ�ʐ4ѦK\h�:L�p/Ma{�A(���lm�<
S�yZ�uf����*8�M���ν��[�v~�^�q��ƙ��U�����c'�� *Om�~FȔ=�Q0б%����ĵP� ��Io�1�aG��1�~ۉJ����_��x�s`7���vfn&���J�t3��N'N���١)rc�n�P��H1�wo�������[��Z�DD>k��y��w��n�'�C�4�l�ro�o'�/[�~Sg<��x����_<+��[X�q���CX׸P~X�Q�8��H��'vt0�Q!�!��\�
��8��s�v���L�xE�^�7or?��OSj���$���N|舘�q�����;N�lxV�z�V4��g�LAO�v��'��t���      i   d   x���	�0�s:E&�������W����;��3|�H��jBKM�vaL������uln���V�l�K�CT��m��Q�dQ|�ip�8�>�)+�      ]   �   x���э�0D�'UP�)v�$nb+����*���	�AZ�'P���q H2C��ey�=A<��#1E���_.hi9��Ɖ���
��Ъ��(��@���f��*ܜ���.�r�/���}K���"|�4"�L��A�KQFTxj+�l��N�}�!�.�c6#F�(h�6��Y��K���ri���ÛL'�z;�����a�Y��P���g�u6������q�9�r�r�<e]RJ/���2      [      x��[Yo�~�~E�������Q��H2!�ɋ^��S�@RI� E��ɢ� 0l؎��1��Xr�䮀��ٿ�_�:�gg��%	p Y�ܝ驮㫯���	�䭙;���r�cqEFKb*�3�$z�z����[쉢]t{�Ł(����:|o͢-�M���[�3��[l�+E�����h	S[�i�l��؇�����s�����KK��:wΙ�nߝ\�sd���<�Ɵ�:w���|����g�O�I'�+q�X�vKߏ�PFa�{a꧑t��?ܾ9q��D�6��@z3E�ɋ����k���+�\���*vQn�H�؄�ZE��H���
ߡ�[�
��؁n�Ao>jV�	�z�t_M	�(zsRܘ�1W�_�[��z��:�GdHn�Ҡi�!�^$h������[y�m���s��=&�I�M�_���G��\�5�
�$�;-TjwU<���m<��x�/�=���$ Y���d�g��e�Gm_��MX�[�1��J�3��`�V�Ȧ^����_�>�������o�7�F��Ճ�������~�{��؊��?�9z���>k�x oh�e����/ђ�>1`��܅RmoU�[�����Fi�}�o
�{����;t�DY~���t��ʽ�d.�`_����`�Dv���&޽{{>���7��L"�o�A��	2�T�J2(`���F]��:���1^�cJ��C+1M+�R�
��H]�6�h��a�;�\:3��>�V�Qk��m��	(5�a���y����*<����Pb���ُ@��VM;��o�����Z�e�:t�e�
��=�a~H�$sp��h�����s�ڮ �'���܀�٦{wp�v�Z`�y���e{�O
cx3D�x��-�]������M��0< �.$�zc0�H�9Ÿ�@m�]�O#���-��Q�7��Y�$����v�n��ވ9@Q�� �}����M�	p�IW�eq;������ʬ�h=�-"�H?5�����p;�M������]��J�{��)JVYN�����M\�Ш��&�	�����N�Ju�(1�M_�M�y�	��zw�T���#pg>OQ�p��al2�9(�M���sA.��x��[
���&��5�����3��OQ���3�MҴ���
�y���s�K6�8N��u�Q�5^+3)|T~�8VN�)vU"��j�+�S���=@}�������&��I�WV�� 8�X����f�ʹɶ�*:�u(=�2*s�{ў[���e��� ��q���w��;;�ǖ)�u&'��ؐ9�	���\�z�*R�K�%GXa�B�ŬdK��~nl��1G��W�Ғ�aifF�H#�L�JR+p4c���W�����+�O���]�P\��r�|���� pi�*r�M�oLk�,��e��v$7���h���K$����NG�KE�ȳU��O�p9*���}�T!�(Ď"�/"À?9���e�i���\���x�~�gA�fFvX�kI/���dY�U�gm�G�t�=#��7��+
�����!~ ��.v5L��>��R��#�A.�A��Z�� xR�Q�L18r�2M75	P��#UG>��ժ���S*o����6�T�C����>Q����?W!A�{�V !q+_��U	U��dKe���=�~T=�@����;\�G�ҝW�rP��6A�m\�5�r�(� 6˗U�5,6�)�(�S>n�!�Wl`|Uz�~y[�Y�J4��F��m�����!��`b���~8�DQ���4��ˊ"� CV/ܤ*8WMմk��~q�]T��&E�:g��W�e��8^���5̊�h� }�r�2�ި:�Z5��5?�#b��*�W�!��/4��	c�6�ϩ��P��u�;@pk�S�'���J��-�Os����.2�yB�w�cBq�����Y\¢��qr��ѐ��1"F�LS�j5�ܤŵC�\/�b'ROzq&2L3�t�XFq2���;T�_��z�
'�+2E��..GP���R���í��˚b����0NDƞO	@uT��^��$��JAcW�'x�ov����:�+E�B�}���e��pm�R*���%���Ɂ:��}0��Uh
�z��������VQj�x�ndY�4�״b�ϼԵ|GZ�V�	[E�|�{U��*z^Hѓ�	S^�W9���L��L�;�߂�u�dt����*jRĶ�?�;O���/7p\+�,N⛁��ر��s��u�σ�'_,*?g�y,���cm<��N�??U���6�ڟ��G����QI�f��E��ݰ�r*���/ϗff����$q)#Kf��3/q�z:�py����.��]��q��|�� �������;��,I����/���D��1�/[�#'�J�y��qz������A�����u�!Ӆr�5@а�L����rN�W5�VÏ2���̛�{�D9׍̃#�z�D:�L��ҩ`G9�;�+��a~7�G�O�N.��3��D�K�3sK��\4;jڒ��%;G:[��7�:`*K!�������qz.^>�F���^䙦g��z���.ގn�V��=�=B�ϩ��������)����'Kk�#��7rCC�Q�=(�HHӾ{���>���g˫�2�Q�2��iӦg�fa�pB��*���c�ҍ��(��b��h#T*�Aui.���|���>@i��:���r�r+ʾ���s���q�2����fF������2!�cMN����u
0,P�l�q&�SV%�2��n�2���l��ڶb��Ȉ\����#��I���i�fj��NT�S�������N����	��WsM:x ��%�an�e���5h�X,�4�F5�8��]qqF.-�KWG ��0q��Uh�쁛Zz�:���ˎgj�ͧt�rR׊����#'3,+����L`<�-?��\�Ĺ�H�D�@��k���SW��oq,S�Q|�S �����險��VmTΑ�cd]dɜ��&VT̗Æ����=�j�fR�KTo�4�j���M���M儏 ����R`�l��[j+MՐẂ��@ų3:�/\������D�%��`�X]2Gf�S��q��^y��r�� ��iC���&� �dJ�wST��bz6�vz��ˍ�jG&�V�u8ٝB�dI��g���M�i)���W��
2�-�!�ה^���FF���d����]��p,����;�'�u1=�-�SA���o���P7/�<��L�'i����c��v�٪���͇V���&���8b��`�:u�ݧ�m�7�����P��o	:' �yC(¿����,*SIT%����.��1�	�ט(�Ñ(�A��az���>�əD��N!���t�v(� f^I'�י�H;*��7��>Z��հ���^^SeHn��Z���*��UO~U;�IG��˷3ی�&��Ů���?��,�'��tA��x��lܕ����l��a@;�n,�w�F8Y;�(�>T��|7�Q��>�Pi����ay>��C����C���7�s6�Qw�m��6زJ��
�8��9r5��wc'ȥ.�0�-�i�\Ԝ(���J7�1��x�_X��"�{����3��J>� � tB�72i;q Mi��g���О��#��X[� ��8�N:�s�Rص�W����ǖa�a��QR�6��@v���\��iw��V��=#x���
�q�P�#,�d(��`����`2��1g�	�vՑ��=��Mf}hr��	��| �v��v�F1݁8-���w
��o�P��]:��*�4Y��d}(l�ږP	�}w�ԁ]���6u�1�����i�4�f�/;�2��C`�A�yv����9R:���}m~!����6�~5���*lYq���y�\:Ƶ�=m=��;�Q>�B	����Aȸ�t� _7�����F���?ӣ����Ln(N����_��EQ���ի�;4��W��c���|ܭ�.���*��)^���#m׃�&ϕ��b3	3�_� 5   �����)�>�,��'؈�РgC�0|1uǻ�q|�������3g��b{m      b      x�m�I�$�E�^��� i��:Ao8��z���%@(�Е?I��Hw���w��0��`B�bzN�l�K�ѧ��!V���8���O�V)��X���n�U��}-ro�fLo���G� ��/�pH�i�0ͬ�R��{m�B�{��/7H}Ĝ�����x��v���Tk4a�Rm3)H	k���������R��ֈ;E���Մa�ieTv�{+6�����c�ӕ��G��R����2k�J���@�m�v�M�(6?}z�u/�z�(M�ئ�nMh��^m�U�]ج�R��=�OquG��;�]�7q�N](I	�:�H�W�}G���C���8�/��j���9$Y��k����Z���է��P�������U�q���Ĭ�v�%w��5��q��a��I�ۄ
L	8�:���(7���?J�/�~��6��R�	6W6%�ѳ��,>�=��>|��?J1�PM�A[o�4ŌဈQ��w����|������Ό6��T��L�[�ۮ��)��3ȣ��j�M�-H-��:M��X/���k��Y��������:G�DS&zS�t��������?\%w�ҧMq���	�3�!�Yk�o0�gS����c3�&�Q�>�0�n��
+Z_0��<��L<j��K�o'bZ��b���Pg/�C�Iz�.�|?�Ś$�yl4Oq�zḩq�{�;�-�\ߵ�Gl�6�Oe�P�О�Ib�n�n0>?E5\0��� ��o��j�iF�&Z͇z��Ē�:o_�����V�<�/q�n�j(31_(�%l�����3���);�0��F��6�-�P�q���}��#.ƣ��`�HE���f"+�K�m���R bz/���x�k�4M��VI$�da�GI)�/������ï�|�o	�в-A�2�����w�k�������$WϤzt�b?���BY=�;��D�]X����Ɵc)�:�쎰3�����(�֠s�,�3��G]��AY��z���<~x9=���8�XK�`	����B�t�D�'c1E+3�7�sZy,������0AO��Lf����iv�Z8�K�1$B.�^�������` ���&o%4�Z���h�����ʈU�CX��`P�ՖoB���)��bJGdր�(�YX�?�g�3�G~3Fb:&(Q�h#0iMSJ��em�����L|`�Çk5�jy�[�=��4��	?"%ni���n���
SߠƉIJ��9��r�ھ@�),�Qߕ��ȓ^�n�?"e�G3�i>I.y�a�#�����7��)z;�0�Z k�"blȒ֍P�`�ZK�]]sd��3�&\+pU���cڹ�e��ӎD�#νܞ#��|�%��ô2�Ie8]�Zo ��������fO^�����i���2��1p�R�/��ZI Dz����*��������c����[���q>j����h���{�9���'�����_�G�Ӌ���d����i</�L>�A�N��_+)�ߌ��p�4\���8��(�3`�⡻�H>���`z���鲚3�Ơ��r�Խ�A�Nf�r��+������iZO�j81k%+RV���=��cc���a��@*=�R�q1�3<��J����∋{��Q\']�e��ҙ�&(��5H��1�w��ܝ�~�m����o��U}S���2����E�������"�i�$7j5G��_;�Ϙ?���l�Q,nfɅ�sސ�0�����i9lY}5?��6����pe=R�M�'�l���a�zXe]vtեk�9:
4!i�v0.�a������o��*�N�f�ľ2���8��6�=\��rG�j��v�I�R�>qj�p�55M��ejcm�_G˕s�_Z/T�bvG�O�1R7�t=(O�� �~���+J*L>�.���# �TB:.��Y;��8��0^��^>H��,0�� 2��A�X�mb
��R���a��7\�O�1^�䡆��dЭQ�������w����cd��j�'*�j�IL䤘&���='���+�CR'e;���{�@umb�%�����
sz�Ε7�Qmp{IRSF�M��\�l�:c��w�]�ۥ�0�qB�}�:�Z�T���ښ��J�w�8`�k��^IʓqPF��E7�#�*!0�(:�A�S�B����]����k�������̐ �;J<�D^��ᇳ˗�Ъ��E�0�R���\�_(IǠ\k!ߠ8��D9��j���b8'$sᢓ���i+�n<G��U�P��b�7�	��a�� �eJ��R��Z���sOqYT'�Y��D�o(�$�Lu�%#��V� �̇ѝ�!	��Q��Q�j��J<6[_�<��e-�9M��7+cE�{G��� }��(Nײ%m݆�Fk�-��� r7�jb�KMt^����P�U	�d�M�	{_��g�.r�Q9ZY"�hU6S@`d���&�c�;���旁!�Vҹ�=�
ʽ��-uz�1�{w�+"���9��^c�'t�������{�:�N�$���i�Q�_��zQ6)%��]^SMCRB���g>�A��� �"�W�(ʼ3$�	Ep(*�J�������K��?���~R�Hob��z��X����I�1O�F5�TlKf�2��H��E�H$�d{����#<ЋJ<<�=�<��F�3�F<a"�P�[��Ϩ��t!0�����<�`Q�0��ֵ�}-Q/Z�|�{"2�̰^~0�Xo!�����rG	�H�J���nKl>돝�'E/X�&����Hl��n<�j� ��S�p&3F�y�:���� ���#�
p^ע /�hWF�����6��c��-��ͯuG9�XsxU7:�����Zs��9͚$t����P\> �b��,B�d,Sr�K�3���Cy��2�1��;���Y� 4��F��;1�Ec�(J,�Z�H�/D����W�H�K)��xGaG�/��Ѣ�Hic��C拇���1;��U]�[b}\!K�*B�0Rqs_ё�>7��F����Ƚf1y�%���6�Z��b�W�Z&ICu��n�Wm��^��ћ'1@H#��M��D�1�+�P :���()����p�I*҉��Ez�}^n�����BA��]�ò;�e�໾�T�˳����([��/=�����zʢ���)&�[�c�����JU��sZ�͉���X,���ORn�O���D	^u1^���na��EM�rrD��FikP���^&������ױ�â#E����������;b���ɩn��^���;��N��w$�0�̏��`��K���hX�x��7�\�$��q�Fh�3_!Z��H|?(��{k4bU��i�m��$���P<4�0���e���<���R��RM����Y�Q]��\]�i�������#_2�����r��6%����	�@���2�(Q��KF�=r�q��<=i,+]g1�G_��u�;JzJ �U���E��^w�S�}~�.�-2�����^k�7�}6z!���/�:b3���I6�\rG)g��
�Zo�A\]�,']]ˤ��'@^��7J�������ZZ�=S�B��qɐiv�K��n�(g4B�_($aY�AG�&�Ls�xDt�Z}lP����ۊ+��t�H�\��k]��9����|(�k���bU��/y-�@�Si)����K�s��q�n3��gY�Ņ�r��@8_�;��1��Tȯ�I8F�7%�Qz�ȡ�b������-���u6[�f��Zmw��tڽ^��1{���־#!?7��b=���[�pw��Z���E�=�-��������X$��Co�֨_��[�$}������g8�H��!�@�~��1��j�>U_�_/�U�_F(�6,�b������yq����<a��ehYY��K�oH��p]C�y���0���ǣ�޶������B��E���ή�Z��>����Ʀ�O&��~)�Mg	�xf(s�~�T�����~�-�rց��Ё>�.C��E�o
vz�`8,ѻ��^?��hA���X�*�fݔ� �  ��rh��y�o���U�~��R��f��^�2�(���a�����D��H#,�
Sܖ�F&��~�������F�7$I��%��lp�L�9�b���ÛV�7eq�x?떣�pD���/�a=q*oQ�0n *����zA��phd/�]�)JV���26W���y�	�����{:pY��L;U���k�Dhڈ^;��Ȭ�Y��5ds�����1�Y��%�N�{i��g��ޯ�DYf=��U�Ń�'�[��)��P_G�k5���+����NU� s58rS�������	��Q���>3�cg ��i`\|����KH�S�J<É/&�1r�� :�q:t�Q{ڂt���������'�]s��D���ipԫ�"�pnD��G4�w����Q�ޫa�,:-�&��E�B����p�����e��7��%�zP`�-Yv��`�s����a�ꓼ���:�3�c�Q}k��g��}�h��/7�x>=�k0���]������p�y��a(i���S��4.��J\4Lr�e����tY%BHsq�_�n���&_��F��^i.rWԔ�*�umgp�-[M��`4(I�ׯ�T96���_~������n��/���pR�=?{��,���RF	��e<�kqD�6��]��������Z�a��Q����������g����]��>>L�,�D��z���kPv؞�7w~��\0�w�3�������z״\����I��;�5��& Y|��X�[�UL�y�۶Ω�����b����S�%yʈ>�qd�1�ABcX^��M�^�|���MA����p�~qI�2�|մ4�L�#a�T
K�~?G�;�,	GM�׫yʂC��b��3S��D����tC Y�A/�!�1�z�W�E�uxj���;L�O謿j�on��~敫¦�5�)�,�����~3hzz�������� Jxb      ^   (   x�3�,-N-�2���OI-J,�/�2�LL�������� ��	      c      x�3�4�2�44�21z\\\ .q      `   �   x�m���0 E��;�+��Hh,��B\Z[	A����5>6�s��q���@�jv���觊�B��3Mw4����v����=A��E�R�iٹ*9	��zGh%"�=��0����ɋ����|Q���g�	]��^f7iY�1�$��Y-�J�ZڪPb�^< ���C\     