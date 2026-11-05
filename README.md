# gnome-extension-clean-notifications-position

Extensión para GNOME Shell 50 que mueve el botón **Limpiar** al inicio del historial de notificaciones. Al desactivarla, GNOME recupera su disposición normal.

La instalación es por usuario: no necesita `sudo` y no modifica archivos del sistema.

## Requisitos

- GNOME Shell 50.
- Los comandos `git` y `gnome-extensions` disponibles en la terminal.

## Instalación

Clona el repositorio y crea el paquete instalable:

```bash
git clone https://github.com/todomagichere/gnome-extension-clean-notifications-position.git
cd gnome-extension-clean-notifications-position
gnome-extensions pack --force --out-dir . clear-first@todomagichere
gnome-extensions install --force "$PWD/clear-first@todomagichere.shell-extension.zip"
```

Ahora **cierra sesión y vuelve a iniciarla**. Es necesario para que GNOME Shell detecte una extensión instalada mientras la sesión ya estaba en marcha, especialmente en Wayland.

Después de volver a entrar, actívala:

```bash
gnome-extensions enable clear-first@todomagichere
```

Para comprobar que está activa:

```bash
gnome-extensions list --enabled | grep -F clear-first@todomagichere
```

Abre el panel de fecha/notificaciones: el botón **Limpiar** aparecerá arriba.

## Desinstalación

```bash
gnome-extensions disable clear-first@todomagichere
gnome-extensions uninstall clear-first@todomagichere
```
