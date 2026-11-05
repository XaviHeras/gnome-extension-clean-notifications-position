import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import {Extension} from 'resource:///org/gnome/shell/extensions/extension.js';

export default class ClearFirstExtension extends Extension {
    enable() {
        const messageList = Main.panel.statusArea.dateMenu?._messageList;
        const clearButton = messageList?._clearButton;

        if (!clearButton)
            throw new Error('No se encontró la lista de notificaciones de GNOME');

        this._controls = clearButton.get_parent();
        this._container = this._controls.get_parent();
        this._originalIndex = this._container.get_children().indexOf(this._controls);

        this._container.set_child_at_index(this._controls, 0);
    }

    disable() {
        if (this._controls && this._container && !this._controls.is_destroyed())
            this._container.set_child_at_index(this._controls, this._originalIndex);

        this._controls = null;
        this._container = null;
        this._originalIndex = null;
    }
}
