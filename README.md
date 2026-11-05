# gnome-extension-clean-notifications-position

Extensión para GNOME Shell 50 que mueve el botón **Limpiar** al inicio del historial de notificaciones. Al desactivarla, GNOME recupera su disposición normal.

## Instalación

```bash
git clone https://github.com/todomagichere/ubuntu-clean-notifications-button-position.git
cd ubuntu-clean-notifications-button-position
gnome-extensions pack --force --out-dir . clear-first@todomagichere
gnome-extensions install --force clear-first@todomagichere.shell-extension.zip
gnome-extensions enable clear-first@todomagichere
```

## Desinstalación

```bash
gnome-extensions disable clear-first@todomagichere
gnome-extensions uninstall clear-first@todomagichere
```
