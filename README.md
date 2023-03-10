# **Mixing Feelings 馃帶** - Co:here [Hackathon](https://discord.com/channels/741237973663612969/1065935439380365322)

Dime como te sientes, y te recomendare 3 playlist de **Spotify**!

![cover-mixin](https://user-images.githubusercontent.com/65827956/217028600-05d3bb38-a5a8-4240-b5d0-cc7e0b961290.png)

<br/>

## **Caracter铆sticas de la app** 鈿欙笍

1. Clasificar tu estado de animo en base a lo que ingreses al input. (Usando la API de **Co:here**).

2. Mostrarte 3 listas de reproducciones en base a la clasificaci贸n de tus sentimientos. (Usando la API de **Spotify**).

3. Reproducir una canci贸n de alguna de las 3 listas de reproducci贸n.

4. Guardar tu feedback en base de datos para entrenar a la IA de **Co:here**.

## **Tecnolog铆as principales** 馃И

- Astro
- React JS
- Svelte
- TypeScript
- Tailwind CSS
- Supabase

## **Instalaci贸n 馃О**

1. Clona el repositorio ( Necesitas tener instalado [Git](https://git-scm.com) ).

```shell
    git clone https://github.com/Germancitoz/mixin-feelings.git
```

2.  Instala las dependencias del proyecto con el siguiente comando:

```shell
    npm install
```

3. Antes de levantar el servidor de desarrollo necesitas lo siguiente:

   - Crear un archivo `.env` en la ra铆z del proyecto y agregar las siguientes variables

   ```
   PUBLIC_COHERE_API_KEY=
   PUBLIC_SPOTIFY_TOKEN=
   PUBLIC_SUPABASE_URL=
   PUBLIC_SUPABASE_ANON_KEY=
   PUBLIC_RAPIDAPI_KEY=
   PUBLIC_RAPIDAPI_HOST=
   ```

4. Levanta el servidor de desarrollo.

```shell
    npm run dev
```

&nbsp;

## **Demostraci贸n en vivo 鉀擄笍**

[mixin-feelings.vercel.app](https://mixin-feelings.vercel.app/)

<br/>

## **Integrantes del proyecto** 馃懃

- [Germ谩n Fern谩ndez](https://github.com/Germancitoz)
- [Felipe Ossandon](https://github.com/felipetodev)
- [Franko Martinez](https://github.com/Franklin361)
