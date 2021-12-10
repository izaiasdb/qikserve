import { notification } from 'antd'

export const openNotification = ({tipo = 'info', descricao = '', titulo = 'Notificação', duracao = 7}) => {
	  notification[tipo]({
	    message: titulo,
	    description: descricao,
	    duration: duracao
	  });
};