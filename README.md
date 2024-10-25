# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refres

# **Instalación y Configuración de Neovim y Vite en Arch Linux**

### **Sistema Operativo y Entorno**

Soy Jesús Uriel Santana Oliva, y me embarqué en la instalación y configuración de mi entorno de desarrollo en Arch Linux. Este sistema operativo, conocido por su flexibilidad y rapidez, me permite una personalización completa, algo que valoro como desarrollador y estudiante de ciberseguridad. Para mis proyectos actuales, opté por usar **Neovim (nvim)**, un editor de texto avanzado y altamente personalizable. Esta elección viene de mi experiencia previa con editores de texto y la versatilidad de Neovim, que me permite gestionar desde código hasta automatización.

Mi configuración se encuentra en un repositorio personalizado de GitHub, donde conservo ajustes para varios lenguajes de programación y plugins que optimizan la experiencia de desarrollo. A continuación, te guío paso a paso en la configuración de este entorno, ideal para el desarrollo en **React** y **Vite**.

#### **Paso 1: Instalación de Neovim**

Para comenzar, abrí una terminal en **Arch Linux** usando el shell `zsh`, que personalicé previamente para tener un entorno ordenado y eficiente. Aquí, usé el gestor de paquetes `pacman`, propio de Arch, para instalar Neovim:

```bash
sudo pacman -S neovim
```

Este comando descargó e instaló la versión más reciente de Neovim. A medida que terminaba la instalación, me emocionaba tener un entorno limpio y adecuado para mi trabajo. ¿Por qué Neovim? Porque, además de ser ligero, tiene soporte avanzado para plugins, algo indispensable para los frameworks modernos.

#### **Paso 2: Clonación de mi Repositorio de Configuración**

Aquí es donde empecé a personalizar Neovim según mis necesidades. Mi configuración se encuentra en un repositorio de GitHub. Con ella, no solo aplico ajustes específicos, sino que también logro estandarizar el entorno de desarrollo tanto para mi usuario principal como para `root`, algo que me ayuda cuando necesito permisos elevados.

Para aplicar esta configuración:

1. Navegué al directorio de configuración de Neovim para mi usuario:

   ```bash
   cd /home/santanaoliva_u/.config
   ```

2. Cloné mi repositorio desde GitHub:

   ```bash
   git clone https://github.com/santanaoliva-u/santana.nvim nvim
   ```

   Este paso fue crucial, ya que al clonar el repositorio pude trasladar todos mis ajustes y plugins preferidos. Luego, repetí este proceso para el usuario `root`, permitiéndome mantener la misma configuración en ambos contextos.

   ```bash
   sudo -i
   cd /root/.config
   git clone https://github.com/santanaoliva-u/santana.nvim nvim
   ```

![Repositorio clonado en la configuración](../../../../../99 - Meta/attachments/img/Pasted image 20241022233053.png)

#### **Paso 3: Instalación de Dependencias y Plugins en Neovim**

Al abrir Neovim por primera vez, el gestor de plugins (Packer) inició la instalación automática de los complementos necesarios para optimizar el desarrollo en **React**, **Redux** y **Vite**. Estos plugins incluyen desde autocompletado hasta soporte para snippets (fragmentos de código), lo que agiliza el trabajo en aplicaciones modernas.

Dentro de Neovim, modifiqué el archivo de configuración `init.vim` para agregar algunos plugins adicionales, como se muestra aquí:

```lua
-- Plugin manager: Packer
return require('packer').startup(function()
    use 'neovim/nvim-lspconfig' -- Configuración del LSP
    use 'hrsh7th/nvim-compe' -- Autocompletado
    use 'dsznajder/vscode-es7-javascript-react-snippets' -- Snippets de React/Redux/React Native
    -- Otros plugins según las necesidades del proyecto
end)
```

A continuación, usé el comando `:PackerInstall` en Neovim para instalar automáticamente todos los plugins. Este paso me confirmó que Neovim estaba listo para ofrecerme una experiencia de desarrollo avanzada.

#### **Paso 4: Instalación de Node.js, NPM y Vite**

Con Neovim configurado, necesitaba instalar Node.js y npm, fundamentales para ejecutar aplicaciones en JavaScript y, particularmente, **Vite**, el framework que elegí por su rapidez en la compilación y la facilidad para configurar un proyecto en React.

1. Instalé Node.js y npm usando pacman:

   ```bash
   sudo pacman -S nodejs npm
   ```

2. Después, instalé Vite globalmente usando npm:

   ```bash
   npm install -g create-vite
   ```

3. Por último, creé un proyecto en React con Vite usando el comando:

   ```bash
   create-vite my-project --template react
   cd my-project
   npm install
   ```

En este punto, tenía todo listo: Neovim y Vite configurados en Arch Linux, optimizados y listos para desarrollar aplicaciones modernas en React. Gracias a esta configuración, pude comenzar a desarrollar con una interfaz minimalista, rápida y enfocada, justo lo que necesitaba.

---

**Referencias:**

Para más detalles sobre Vite y sus capacidades, visita [vite.dev](https://vite.dev).
