PGDMP     6    1                {            zooshop    15.1    15.1 "               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    57515    zooshop    DATABASE     {   CREATE DATABASE zooshop WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE zooshop;
                postgres    false            �            1259    57666 
   categories    TABLE     W   CREATE TABLE public.categories (
    category_id bigint NOT NULL,
    category text
);
    DROP TABLE public.categories;
       public         heap    postgres    false            �            1259    57665    categories_category_id_seq    SEQUENCE     �   CREATE SEQUENCE public.categories_category_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.categories_category_id_seq;
       public          postgres    false    217                       0    0    categories_category_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.categories_category_id_seq OWNED BY public.categories.category_id;
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
       public          postgres    false    214                       0    0    news_news_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.news_news_id_seq OWNED BY public.news.news_id;
          public          postgres    false    215            �            1259    57689    prices    TABLE     �   CREATE TABLE public.prices (
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
       public         heap    postgres    false            �            1259    57688    prices_price_id_seq    SEQUENCE     |   CREATE SEQUENCE public.prices_price_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.prices_price_id_seq;
       public          postgres    false    221                        0    0    prices_price_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.prices_price_id_seq OWNED BY public.prices.price_id;
          public          postgres    false    220            �            1259    57675    products    TABLE     �   CREATE TABLE public.products (
    product_id bigint NOT NULL,
    categoryid integer,
    name text,
    thumbnail text,
    color text[],
    description text,
    brand text,
    in_stock boolean
);
    DROP TABLE public.products;
       public         heap    postgres    false            �            1259    57674    products_product_id_seq    SEQUENCE     �   CREATE SEQUENCE public.products_product_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.products_product_id_seq;
       public          postgres    false    219            !           0    0    products_product_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.products_product_id_seq OWNED BY public.products.product_id;
          public          postgres    false    218            u           2604    57669    categories category_id    DEFAULT     �   ALTER TABLE ONLY public.categories ALTER COLUMN category_id SET DEFAULT nextval('public.categories_category_id_seq'::regclass);
 E   ALTER TABLE public.categories ALTER COLUMN category_id DROP DEFAULT;
       public          postgres    false    216    217    217            t           2604    57541    news news_id    DEFAULT     l   ALTER TABLE ONLY public.news ALTER COLUMN news_id SET DEFAULT nextval('public.news_news_id_seq'::regclass);
 ;   ALTER TABLE public.news ALTER COLUMN news_id DROP DEFAULT;
       public          postgres    false    215    214            w           2604    57692    prices price_id    DEFAULT     r   ALTER TABLE ONLY public.prices ALTER COLUMN price_id SET DEFAULT nextval('public.prices_price_id_seq'::regclass);
 >   ALTER TABLE public.prices ALTER COLUMN price_id DROP DEFAULT;
       public          postgres    false    220    221    221            v           2604    57678    products product_id    DEFAULT     z   ALTER TABLE ONLY public.products ALTER COLUMN product_id SET DEFAULT nextval('public.products_product_id_seq'::regclass);
 B   ALTER TABLE public.products ALTER COLUMN product_id DROP DEFAULT;
       public          postgres    false    219    218    219                      0    57666 
   categories 
   TABLE DATA           ;   COPY public.categories (category_id, category) FROM stdin;
    public          postgres    false    217   x%                 0    57522    news 
   TABLE DATA           T   COPY public.news (news_id, title, author, data, thumbnail, description) FROM stdin;
    public          postgres    false    214   �&                 0    57689    prices 
   TABLE DATA           �   COPY public.prices (price_id, productid, price_small, price_medium, price_large, weight_small, weight_medium, weight_large) FROM stdin;
    public          postgres    false    221   �O                 0    57675    products 
   TABLE DATA           p   COPY public.products (product_id, categoryid, name, thumbnail, color, description, brand, in_stock) FROM stdin;
    public          postgres    false    219   P       "           0    0    categories_category_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.categories_category_id_seq', 20, true);
          public          postgres    false    216            #           0    0    news_news_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.news_news_id_seq', 5, true);
          public          postgres    false    215            $           0    0    prices_price_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.prices_price_id_seq', 5, true);
          public          postgres    false    220            %           0    0    products_product_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.products_product_id_seq', 5, true);
          public          postgres    false    218            {           2606    57673    categories categories_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (category_id);
 D   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
       public            postgres    false    217            y           2606    57552    news news_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.news
    ADD CONSTRAINT news_pkey PRIMARY KEY (news_id);
 8   ALTER TABLE ONLY public.news DROP CONSTRAINT news_pkey;
       public            postgres    false    214                       2606    57696    prices prices_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.prices
    ADD CONSTRAINT prices_pkey PRIMARY KEY (price_id);
 <   ALTER TABLE ONLY public.prices DROP CONSTRAINT prices_pkey;
       public            postgres    false    221            }           2606    57682    products products_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (product_id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    219            �           2606    57697    prices prices_productid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.prices
    ADD CONSTRAINT prices_productid_fkey FOREIGN KEY (productid) REFERENCES public.products(product_id);
 F   ALTER TABLE ONLY public.prices DROP CONSTRAINT prices_productid_fkey;
       public          postgres    false    219    3197    221            �           2606    57683 !   products products_categoryid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_categoryid_fkey FOREIGN KEY (categoryid) REFERENCES public.categories(category_id);
 K   ALTER TABLE ONLY public.products DROP CONSTRAINT products_categoryid_fkey;
       public          postgres    false    219    3195    217               !  x�]PKN�P\?�"'@}-�rCS~R��`G+!$اQ�M�0�c'ݰ�^���x>t�w��p@�7�d��N��K͑p�Y�[G]��L���lX<���@a
)C�^�C	G�|G�>7^i%:ׯPf���:���y0�]Q�G%�}˲�
D�2���9�:�������K*�8%Lh2
�3�+O�o��I���	p���I���8�L�ӒU>3F����3ϓ���/q���!A�w�t׾�qu%�)?g�3#��n��[�dn�����\?r����n�3�8��zv�w}&"Fm0c            x��|ێG�������cd�$�-��@([�U��*T�-h@�A2]��E?�a����̼���a�����;/,�{3�a�ȼD��{��/ܤ2�Kv�BU�m�}�֩�B�6���������=��m�k�����:i�i��'�T~�|�΋�|���_>y���?�on���!��p��n���_��ɓӧO���?��k�M��=����Ync����lS�*�2�*�6�>o��8�,T�q�����v�6V�j�O��n�l�6Y���,ԩ��z��bu����.�¬iS}�r|���;�����Gm�]����8o�yu�QmC�d��4�� �޷8��:k�U<�[���#Jxo�-S*�U�����C�9�ִ����هv��6�C�m��+�*�x����y�	#X&�`]��[�P�EQ�}��C��4|��c�-�d��gӕe�g�\B&m�l�}�t7�����o]��;��j�U�������Y�ʇ�-ou]u�	4x_�ٶ&�T�j��w�W��Ǽi�x�^]����qI�Q|�h��L���g�b5�];�H�/�MƟSW��z�8dM�%��]�`�����6�]�(������d�E���S�	��v�>tk����"���ﰦ�Rr%y�w|z�5���z}��M��"�c�h'�XE�\ۯq��%|�NjVx@6Ѥ�y�R�bbT+��8dsU��F�]!-�������Ps��]�7�w����h��m޶y�=GZEή³MK[	=	��b|�����"b$�h)$�0T��"Է��]�>?e��[���i�:̋p�|���aœ��+�2�&��K��,;���Ų]�N�x����6@����Ln)f��7���X4�g#���c�����O�Pۇ}*�}�"��p��J.��q��9.,�Ĵ,R�e=ēc�Y�B8�:��a�~��ٚ�&��]{��aNԩ$FgaY��m^エ���H�����U(�&u�`��T�}Zu,F��*o���|*���Vk�m3��2nB�`Bk�6�X�|G�Yč�p����o<kd��ួ�eA�6�Ml���r����M|O!bB�YH}k�E�d!a���*}�I8q,D�n�����uL��J�r��jO/!r�uĒ]F��Y���㔂R�f������(#��<�_����6& J4jдu*�X��9������;|q��b�._|���1�s��֞�푯�����E�4�G����O+��*�2]V��A���[�%���Ep�^D|s�}SRq���.w�d�(�+��6�T��#L�/�T�Eل�֗�k\I��`R�I�Zw�O��#��%���`8#���8�KǇU^�k n�ϘKFU��.pe4� Y���P��$-�Y�]�F���푺��1���!ԫ�z��e�
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
��8��s�v���L�xE�^�7or?��OSj���$���N|舘�q�����;N�lxV�z�V4��g�LAO�v��'��t���         l   x�����0kj
O`�)*�/�	��;O���� E���i0�2!�0�v����s$�(�]!��hk9?�-Ƿ���FG{ɿ�i6u�ߣl���1:���s�>�         Z  x��XKoW^'��vAU$���]��u���CڐDy����!<�@�T�h��.+M�L<�c�/�������{g��Vfp<s�=�|����L�'�?^Y�����BE�o|�?����w���~�w�����
���`�+�������n�O�����(�I?�`G�I���&T�O'�pV��L<\__Y�85�[�V'W7�V�����\1�]S+��Vuj���\�n�2]��ʥ�|v����әZ��ʔ��T5�˦�Vre�����ĵUk���D�I����uR��Z�Vu��;�`�n��m��I�m{�|���8x"۴s��M�Xlkº��g�=���w����'�8
_B���0�e��$ס�N�G�S�2�
�1���'�M'y��ŭ�|/9�4�d�
hs��Gl�����5cAO���3���Dـ���%����Ԑ��'�>�����-��<����a=�tC�%]���'C֡�+�]E�<������ ��0��0�# ]��\�B��w���<�z��.[4�J�,xn�&c$#���l��	8��9dz���ecd�Oi��2����5�YR�-~9�]|os�����a=d� fZ�-�B�Ȓmѓ�b0�h�]t*J���Н��"�(�E�>%n1k�yA��h��=���� :>[h�����0�-A���8���F�ONF������<�fI��!�r��b%BW�A�<�H�_L��P�b��e�*�8:�`�&��'&����UȝKH�"<_���Ǥ� 6���St�^]ևD�>
�|�6�K�7�f�4�%���#A��c� }����3��t{`l�*���!o�8���������сo�W���(u��Y.��%�(��d3�ґ<1q#�y"��>����9I�_&�'��?g����ڝ�����;W���"�6������L���C"J?�GZ�4_�r��ؕT6U���)+g�*V:��T3�\����[����S7�߽S=�f.ߟ��fgn^BDJ��(1 �t6s��܁^u�����ņ�@��3��х�5-kӇ}��%&;ajR�&͇��2��":W�1}�H��?�3��_��)�rS�W�G���ֿ�\JjU��dj���$��C>=��_��J9U(d�t6me�Ō��؅j�Z,�lz�+�'��R�V~@�����A��2;\`t����͹�BN@��8�^ +��1j�>��1�"�Y���껺�pE���Ls9NذCĦ��T�w�bn<�����j��5�VM\�K�=�pLĉ*��:-��wp�dS^��(�:�M���n���iLJ����(��:��i��c�z��9�/�iZ�d�u�f���d�� UtBaq =���0���p����A�y`,c��y��F�����n����E�b�7`@/z,ʀ�$$�$�����M,Y�q���d��d���z�`n�u��\K������E��C E�\�~�fa��$_��;1��؞	�Ֆ>��D�3}$��œ�?g���{Sw�x��d�`�4�$�I�6п cD)J�)���p	�3<q��r��`�/䀘wyR��qcg���Ɖ�@
mҪ���m$ݩ��y�_^\X[�!���t:hS�P�W"Y��jŧ�Ϧ/�l��|�R+��j�.�K��]�ֲ�U��r%y��5��wf�.k��qӮ�߾T����ҪmW��ǣ����� �6>��}D}��(ݏσR*q3�V�T������X+f_�y��^��x��?�<�j�����ȫy�0�!��QI1,�t����t��\%�>$_X��+o�֟�Z��W%_+c)���i+[��Rq�P�NW-;�Y���7ԣ�jS~�1��{]ݼB�U�%\�g/"��>d��f�C�0ad'��U:n�[�״�/��).O�����hrxo"��/�d�ӯ����ֆ�4��GDWd5�$+_�Pħ�aƅ���; -�5f �Z�SQ&��W���(cw�
i0��3�����`l���'F�qX�#�Z�,7�Q�:������>���ERX
�(�8XWZ�F�1���bx��1F��P0��Lՙ����)R��k�������cS�`K{Pmr>999���F<     