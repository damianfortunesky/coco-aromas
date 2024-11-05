# coco-aromas

/* ---------------------------------------------------------------------- SUBIR A GIT ----------------------------------------------------------------------*/

# 1. Navegar a la carpeta del proyecto
cd /ruta/de/tu/proyecto

# 2. Inicializar el repositorio de Git (si aún no lo has hecho)
git init

# 3. Agregar el repositorio remoto de GitHub (cambia la URL a la de tu repositorio)
git remote add origin https://github.com/damianfortunesky/coco-aromas.git

# 4. Traer cambios del repositorio remoto
git pull origin main --allow-unrelated-histories

# 5. Agregar todos los archivos al área de staging
git add .

# 6. Realizar el commit inicial
git commit -m "Primer commit"

# 7. Subir el proyecto al repositorio remoto en GitHub
git push -u origin master  # (usa "main" en lugar de "master" si tu rama principal es "main")

/* ---------------------------------------------------------------------------------------------------------------------------------------------------------*/

Instalar y crear proyecto (PATH/cocos-aromas)

    1. npm create vite@latest
    2. cd frontend-app
        npm install
        npm run dev


Instalar Tailwindcss (PATH/cocos-aromas/frontend-app)

    # Instala Tailwind CSS y sus dependencias
    npm install -D tailwindcss postcss autoprefixer

    # Genera el archivo de configuración de Tailwind
    npx tailwindcss init -p
