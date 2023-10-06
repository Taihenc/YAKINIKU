import { get_cuts } from '../scripts/api.js';
import { toPercentage, backend_url } from '../scripts/config.js';

/**@typedef {import('../scripts/config.js').Cut_card} Cut_card */

export default async function cut(page_id, is_show) {
	let class_list = '';
	let style = '';
	if (is_show) {
		class_list = 'content-on-show';
	} else {
		style = 'style="display: none;"';
		class_list = 'content-on-right';
	}
	const cut = `<div id="page-id-${page_id}" class="content-cut ${class_list}" ${style}>
        <div class="cut-selection">
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267.72 160.95">
                <defs>
                    <style>
                        .cls-1 {
                            fill: #383c49;
                        }
                    </style>
                </defs>
                <path class="cls-1" d="M104.05,154.18c1.29,0,1.7-4.17,1.7-5.69a31.38,31.38,0,0,0-.64-4.46,36.17,36.17,0,0,1-.73-5.33c0-1.35,0-2.78.08-4.29h-.22L93,134.6h-.22c.12.74.22,1.52.32,2.29.12,1,.24,1.92.39,2.71,0,1-.12,3.09-.23,3.93a10.36,10.36,0,0,1-1,2.45,1.41,1.41,0,0,0,.27,1.75,1.42,1.42,0,0,1,.41.85c0,1.14,0,1.16-.23,1.32a4,4,0,0,0-1,1.41,18,18,0,0,1-1.34,1.56c-.25.28-.45.5-.5.57A13.82,13.82,0,0,0,87.93,157a18.92,18.92,0,0,1-2,4l-.12.18,17.73-.32v-.11a11.11,11.11,0,0,0-.9-4c-.36-1-.65-1.76-.35-2.19S103.05,154.18,104.05,154.18Z">
                </path>
                <path class="cls-1" d="M190.13,152.06a10.05,10.05,0,0,0-3.26,3.61,8.91,8.91,0,0,1-.54.87c-1.19,1.07-2.5,2.11-3.78,3.11l-1.21,1-.25.19h17.07c.56-.17.9-1.17,1.33-2.42.64-1.86,1.43-4.16,3.21-4.45h0l0,0c.88-.78,1.75-4,2.59-7.18a37.22,37.22,0,0,1,1.78-5.64l4.42-8.74h-.24l-7.48.06h-.23c-2.47,6.45-7.06,12-11.58,17.38Z">
                </path>
                <path class="cls-1" d="M267.57,45.56a20.65,20.65,0,0,1-4.44-1.16c.05.64.09,1.3.09,2,0,9-4.07,20.55-4.07,30.05,0,9.89-2.39,19.84-2.39,30.15,0,5.64-5.51,9.14-5.51,16.62,0,5.45,3.91,9.69,4.81,13.3,0-.72-.22-.64-.22-1.36v-1.35c0-3.24-1-8.4.6-1.32.46,2,.44,4,1.43,5.73,3.8,6.72,2.32,4.18,1.06-3a26.11,26.11,0,0,1,.37-9.12c.28-.09.71,10.3.95,9.72.43-5.75,5-15,2.45-30.23-.36-14,.52-28.61.52-32.28C263.22,64.66,266.78,54.5,267.57,45.56Z">
                </path>
                <path class="cls-1" d="M32.8,48.89l-.36.28C28,52.48,25.76,57.66,27.28,61a5,5,0,0,0,.52.85,3.66,3.66,0,0,1,1.52,1.38c2.92,1.85,8.27,2.06,15.36.54-.06-5.39,0-10.87.2-16.28C39.74,43.69,36.52,46.1,32.8,48.89Zm-.88,13.36a1,1,0,0,1-1,0A2.78,2.78,0,0,1,30,61.15l-1.19-2.26a3.14,3.14,0,0,1-.38-1,1.38,1.38,0,0,1,0-.54,1.1,1.1,0,0,1,.6-.7,1,1,0,0,1,1.24.14,3.33,3.33,0,0,1,.61.88l.32.6-.63.33-.31-.6a3.92,3.92,0,0,0-.43-.68.61.61,0,0,0-.27-.17.44.44,0,0,0-.46.48,2.41,2.41,0,0,0,.31.81l1.24,2.35a3.16,3.16,0,0,0,.54.82.4.4,0,0,0,.67-.36,3.2,3.2,0,0,0-.37-.91l-.32-.6.64-.33.31.59a2.88,2.88,0,0,1,.43,1.38A1,1,0,0,1,31.92,62.25Zm3.3-1.8-1.38-2.63-.87.46,1.38,2.63-.63.34-2.87-5.43.64-.34,1.2,2.28.87-.46L32.36,55l.64-.33,2.86,5.42Zm1.54-.78L33.9,54.24l1.62-.86.28.53-1,.52,1,1.86.93-.49.28.53-.93.49,1,2,1-.53.28.53Zm2.39-1.24L36.28,53l1.63-.85.28.53-1,.51,1,1.86.93-.49.28.53-.93.49,1,2,1-.53.28.54Zm4-2.11-2.37-2.07,1.37,2.6-.65.34-2.86-5.43.64-.33L40.67,54l-.4-3.09.65-.34.4,3.21L43.85,56Z" id="cut_cheek">
                </path>
                <path class="cls-1" d="M107,126.4c0,3.85,1.23,4.58,2.36,6.66l12.86-.21c.29-7.35.67-15.63-.18-22.64a107.06,107.06,0,0,0-17.2,4.09l-.1,0-.12,0A119.1,119.1,0,0,0,90.14,120l-.65.31-.11.05-.12.06a27.58,27.58,0,0,0-.1,3.07V124a8.21,8.21,0,0,0,1.59,5.41A13,13,0,0,1,92.11,132a11.24,11.24,0,0,1,.38,1.37h.22l11.57-.19h.22c0-1.2.09-2.43.14-3.69.17-4.17.34-8.65.28-13,.33-.33.66-.68,1-1.06,1.07.35,1.11,4.65,1.42,5.74A29.48,29.48,0,0,0,107,126.4Zm4.12-10.87h3.25l-3.25-1.23v-.8l3.37,1.28,3.47-1.35v.84l-3.27,1.25H118v.81l-6.84,0Zm0,4.13,4.66-1.57-2,.08h-2.67v-.71l6.83,0v.59l-4.69,1.52,1.72,0h3v.74l-6.83,0Zm0,2.55L118,121.1v.76l-1.3.19v1.24l1.31.18v.77l-6.83-1.06Zm0,4.72H114v-1.1h-2.86V125l6.83,0v.8h-3.31v1.1H118v.8l-6.83,0Zm.87,1.84a6.06,6.06,0,0,1,1-.07h.4v.77H113a4.05,4.05,0,0,0-.87.06.59.59,0,0,0-.3.16.41.41,0,0,0-.08.25.43.43,0,0,0,.22.42,1.18,1.18,0,0,0,.63.13,1.11,1.11,0,0,0,.61-.11,2,2,0,0,0,.37-.29,2.06,2.06,0,0,0,.2-.19l.5-.46a2.75,2.75,0,0,1,2-.83,2.61,2.61,0,0,1,1.35.28,1.3,1.3,0,0,1-.35,2.21,3.94,3.94,0,0,1-1.2.14h-.7v-.78h.7a3.56,3.56,0,0,0,1-.1.41.41,0,0,0,.29-.41.49.49,0,0,0-.13-.4.77.77,0,0,0-.42-.14h-.64a1.84,1.84,0,0,0-1.34.62l-.45.44a2.79,2.79,0,0,1-1.13.74,2.42,2.42,0,0,1-.58.07,2.21,2.21,0,0,1-1.18-.28,1.12,1.12,0,0,1-.43-1.05A1.07,1.07,0,0,1,112,128.77Zm.41-6.09,3.61-.53v1l-3.6-.51Z" id="cut_shank">
                </path>
                <path class="cls-1" d="M223.44,152.4a8.3,8.3,0,0,0-2.8,3.58s-.39.84-.46.91c-1.4,1.4-3,2.74-4.52,4.06h16.73c1.25-.41.77-6.38,3.73-6.87,1.33-1.32,1.81-10.19,2.82-12.78l3.56-9.21-7.78.06C232.88,139.8,227.87,146.11,223.44,152.4Z">
                </path>
                <path class="cls-1" d="M67.67,19.71a42.89,42.89,0,0,1-9.94,2.51A27.29,27.29,0,0,1,48.22,22a308.28,308.28,0,0,0-1,64.77,51,51,0,0,0,6.27-1.18,15.4,15.4,0,0,1,5.78,3.68c0-4,.08-8.17.29-12.51v0s0,0,0-.07C60.45,57.68,63.44,36.09,67.67,19.71ZM50.14,39l5.13.56L50.35,37l.14-1.27,5.09,2.6,5.69-1.55-.15,1.32-5.37,1.43,5.15.57-.14,1.28L50,40.22Zm-.7,4.82a1.72,1.72,0,0,1,1.43-1.66,6.18,6.18,0,0,1,1.9,0l1.19.13-.14,1.24-1.2-.13a5.36,5.36,0,0,0-1.41,0,.93.93,0,0,0-.51.22.64.64,0,0,0-.17.39.71.71,0,0,0,.41.75,4.51,4.51,0,0,0,1.49.36l4.66.52a5.74,5.74,0,0,0,1.73,0A.71.71,0,0,0,59,44.21a6.35,6.35,0,0,0-1.7-.36l-1.19-.13.14-1.25,1.18.13a5.09,5.09,0,0,1,2.44.74,1.71,1.71,0,0,1,.62,1.7,1.77,1.77,0,0,1-1,1.55,5.13,5.13,0,0,1-2.54.21l-4.48-.5a5.81,5.81,0,0,1-1.78-.4,2.75,2.75,0,0,1-.8-.53A2,2,0,0,1,49.44,43.78Zm9.79,10.66L51.57,56l2.72.23,4.68.52L58.84,58l-10.77-1.2.11-1,7.6-1.68-3.12-.22-4.22-.47.13-1.12,10.76,1.2ZM48.79,50.55l.36-3.22,1.05.12L50,49.4l3.68.41.2-1.85,1.06.12-.21,1.85,3.93.43.22-2,1.05.11-.36,3.25Z" id="cut_neck">
                </path>
                <path class="cls-1" d="M35,86.14a33.93,33.93,0,0,0,10.89.78c-.67-6.77-1.06-14.21-1.19-21.86a41.62,41.62,0,0,1-8.39,1A16.25,16.25,0,0,1,30,65c.56,3.09-.86,7.92-5,13.16C28.54,81.77,28.77,84.7,35,86.14Z">
                </path>
                <path class="cls-1" d="M23.6,76.91l.4.35c4.08-5.15,5.47-10,4.55-12.68a3.67,3.67,0,0,0-.2-.47A7.15,7.15,0,0,1,27,62.89a2.66,2.66,0,0,0-.66-.15c-3-.21-8.52,3.66-14.89,14.8a13,13,0,0,0,5,.86A6.38,6.38,0,0,0,19,77a2.89,2.89,0,0,1,.94-.81l-2.81-2.18-.32.4-.36-.28L17.38,73l.36.28-.29.38L20.56,76a4.51,4.51,0,0,1,.87-.07C22.23,76,23.41,76.35,23.6,76.91Zm1.11-13.55.36.28-.52.67,1.26,1,.49-.63.36.28-.49.63,1.35,1,.52-.67.36.28-.86,1.1-3.68-2.85Zm-2.08,2.72,2.73,2.11a2.27,2.27,0,0,0,.46.31.56.56,0,0,0,.17,0,.28.28,0,0,0,.23-.14.31.31,0,0,0,.08-.28.59.59,0,0,0-.2-.28l-.28-.22-2.73-2.11.33-.44,2.74,2.12a1.84,1.84,0,0,1,.63.75,1,1,0,0,1-.88,1.13,1.77,1.77,0,0,1-.88-.42L22.3,66.51Zm-1.35,1.68a.82.82,0,0,1,.52-.37.79.79,0,0,1,.53.1,3.75,3.75,0,0,1,.6.39l.29.22-.33.42-.48-.37A1.2,1.2,0,0,0,22,67.9a.33.33,0,0,0-.33.48,1.75,1.75,0,0,0,.48.49l1.55,1.2a3,3,0,0,0,.66.42.31.31,0,0,0,.36-.11.3.3,0,0,0,0-.38,2.39,2.39,0,0,0-.56-.55l-.48-.37-.23.3-.34-.26.54-.69,1.93,1.49-.17.23L25.06,70a.59.59,0,0,1,0,.72.71.71,0,0,1-.67.3,2.13,2.13,0,0,1-1-.49l-1.54-1.2c-.54-.42-.78-.81-.71-1.17A1,1,0,0,1,21.28,67.76Zm.63,7a.78.78,0,0,1-.7.36,2.2,2.2,0,0,1-1-.48l-1.62-1.26a1.58,1.58,0,0,1-.69-.9.83.83,0,0,1,.22-.65.75.75,0,0,1,.9-.32,2.83,2.83,0,0,1,.7.41l1.62,1.26a2.19,2.19,0,0,1,.72.81A.78.78,0,0,1,21.91,74.79Zm.94-1.33L19.17,70.6l.25-.32,3.17,1.09-1.1-.79-1.44-1.11.3-.38L24,71.94l-.25.32-3.17-1.13.95.69,1.6,1.24Zm-1.28.69a.29.29,0,0,1,0,.35.3.3,0,0,1-.34.12,2.53,2.53,0,0,1-.62-.38L18.93,73a1.56,1.56,0,0,1-.45-.45.3.3,0,0,1,0-.35.29.29,0,0,1,.32-.12,1.93,1.93,0,0,1,.55.34L21,73.65A2.37,2.37,0,0,1,21.57,74.15Z" id="cut_tongue">
                </path>
                <path class="cls-1" d="M31.45,38.18l-1.19,1.54-4.73-4.83,0,0Zm5.65-3.69c0-.43-.42-1-1.31-1.68l-4.61-3.57a3.88,3.88,0,0,0-1.52-.82,1,1,0,0,0-1,.41l-.47.61,8.13,6.29.47-.6A1.15,1.15,0,0,0,37.1,34.49ZM22.52,26c-.67-2,1.32-3.75,2.71-4.62.44-.27.95-.68,1.55-1.11v-.07a8.62,8.62,0,0,1,1.57-.84,14.35,14.35,0,0,0-2.7-9.2c-2.16-3-3.91-4.28-7.81-5.55C17,4.33,8.59.77,14.25,0c8.24.94,17.46,3.47,21.09,9.38a50.77,50.77,0,0,1,4.89,9.88c2.7.89,4.61,1.79,6.73,2.42-1,7.46-1.67,15.75-2,24.24-5.53-3.61-9.28-.79-12.92,1.94l-.35.27c-4.94,3.71-7.33,9.41-5.58,13.32-3.58,0-9.37,4.18-15.87,15.61l-.05,0a2.55,2.55,0,0,1-.4.27c-.1,0-.48.09-.55.14s-.13.23-.27.27a9.17,9.17,0,0,1-1.49.14,10.26,10.26,0,0,1-1.63-.68c-.43-.27-1.26-.47-1.76-.82A13.8,13.8,0,0,1,0,72.56c0-2.32.83-4.16,1.63-6.24.72-1.87,3.05-3.09,4.2-5.84,0-1.66,3-8.26,4.07-9.64S12,48.32,12.21,46C12.21,35.69,15.24,31.52,22.52,26Zm5.18,23.1-10-7.76-.91,1.18L21,45.76l-1.24,1.6-4.2-3.25-.91,1.18,10,7.76.92-1.18-4.86-3.76,1.25-1.6,4.85,3.75ZM26.38,29.88l10,7.76,1.43-1.84a2.26,2.26,0,0,0,.55-2.11,4.9,4.9,0,0,0-1.85-2.19L33,28.78l-.89-.68A4.87,4.87,0,0,0,29.77,27a1.6,1.6,0,0,0-.75.11,2.65,2.65,0,0,0-1.18.92Zm-3.26,4.3L32,43.45l.87-1.12-1.71-1.74,1.41-1.82L34.65,40l.86-1.11-11.29-6.1Zm-4.2,5.48,10,7.76,2.34-3-1-.76-1.43,1.84-3.65-2.83,1.33-1.71-1-.76-1.34,1.71-3.42-2.65,1.41-1.81-1-.76Z" id="cut_head">
                </path>
                <path class="cls-1" d="M205.88,45.67a2.72,2.72,0,0,1,0,.76l-.18,2.47a2.54,2.54,0,0,1-.14.85.39.39,0,0,1-.71,0,2.63,2.63,0,0,1,0-.86l.18-2.48a1.83,1.83,0,0,1,.15-.73.36.36,0,0,1,.37-.21A.36.36,0,0,1,205.88,45.67Zm16.27,5.48a.36.36,0,0,0,.37-.21,2.52,2.52,0,0,0,.14-.84l.18-2.48a2.77,2.77,0,0,0,0-.76.34.34,0,0,0-.33-.24.36.36,0,0,0-.37.2,1.88,1.88,0,0,0-.15.74L221.78,50a2.72,2.72,0,0,0,0,.87A.35.35,0,0,0,222.15,51.15ZM214.57,42c5.38.28,10.47.54,15.24.95-.26,4.23-.74,8.59-1.41,13l-7.4-.6c-7.25-.58-13-1-21-2,.58-4,1.07-8.12,1.42-12.12C206,41.55,210.34,41.78,214.57,42ZM225.7,51.9l.59,0,.17-2.39.06-1.4,1,3.87.48,0,.39-5.52-.58,0-.15,2.16,0,1.6-1-3.84-.49,0Zm-1.61-.12.65,0,.39-5.51-.65,0Zm-3-1.8a2.5,2.5,0,0,0,.16,1.27.93.93,0,0,0,.82.46.91.91,0,0,0,.87-.34,2.46,2.46,0,0,0,.33-1.23l.17-2.44a3.13,3.13,0,0,0,0-1,.9.9,0,0,0-.9-.68,1.06,1.06,0,0,0-.8.22,1.92,1.92,0,0,0-.43,1.27ZM204,44.82l-1.82-.12,0,.53.61.05-.35,5,.65,0,.35-5,.56,0Zm2.5.72a.89.89,0,0,0-.9-.67,1,1,0,0,0-.8.22,1.92,1.92,0,0,0-.43,1.27l-.17,2.43a2.52,2.52,0,0,0,.16,1.27.94.94,0,0,0,.82.45.91.91,0,0,0,.87-.33,2.47,2.47,0,0,0,.33-1.24l.17-2.43A3.2,3.2,0,0,0,206.5,45.54Zm3,.28a.86.86,0,0,0-.88-.67l-1.11-.08-.39,5.51.65.05.15-2.16.46,0a1,1,0,0,0,.74-.21,1.39,1.39,0,0,0,.35-.8c0-.17.06-.43.09-.77A3.19,3.19,0,0,0,209.49,45.82Zm4.22.4a.86.86,0,0,0-.89-.84.9.9,0,0,0-.87.29,1.83,1.83,0,0,0-.29.94,1.7,1.7,0,0,0,.56,1.43l.33.38a1.48,1.48,0,0,1,.43,1.12c0,.19,0,.36,0,.51a.56.56,0,0,1-.13.33.4.4,0,0,1-.33.09.32.32,0,0,1-.31-.26,2.61,2.61,0,0,1,0-.85l0-.56-.63,0,0,.53v0a3.27,3.27,0,0,0,.05,1,.87.87,0,0,0,.9.72.9.9,0,0,0,.87-.31,2.22,2.22,0,0,0,.29-1.08,2.19,2.19,0,0,0-.56-1.63l-.35-.43-.14-.17a1.41,1.41,0,0,1-.21-.31.93.93,0,0,1-.06-.51,1,1,0,0,1,.14-.5.37.37,0,0,1,.35-.15.33.33,0,0,1,.2.08.39.39,0,0,1,.11.25,3,3,0,0,1,0,.71l0,.37.62,0,0-.32A3.89,3.89,0,0,0,213.71,46.22Zm5.14,5.19,1.67.12,0-.53-1-.08.35-5-.65-.05Zm-3-.21.65,0,.19-2.66.38,0a.6.6,0,0,1,.35.13c.07.06.09.3.07.69a12.78,12.78,0,0,0-.08,1.86l.64,0a4.09,4.09,0,0,1,0-.92c0-.53,0-.93,0-1.2a1.87,1.87,0,0,0-.11-.59.45.45,0,0,0-.3-.24.6.6,0,0,0,.42-.34,2,2,0,0,0,.16-.71,4.94,4.94,0,0,0,0-.62,1,1,0,0,0-.21-.72,1,1,0,0,0-.69-.25l-1.16-.08Zm-1.21-5.62-.39,5.51.65,0,.39-5.52Zm2.78,2.51a.49.49,0,0,0,.14-.27,3.33,3.33,0,0,0,.09-.64v0q0-.65-.06-.75a.5.5,0,0,0-.33-.12l-.4,0-.14,1.86.42,0A.45.45,0,0,0,217.43,48.09Zm-8.91-2.43-.41,0-.16,2.3.4,0a.34.34,0,0,0,.38-.21,3.39,3.39,0,0,0,.16-.9v-.11a2.44,2.44,0,0,0,0-.81A.35.35,0,0,0,208.52,45.66Z" id="cut_topsirloin">
                </path>
                <path class="cls-1" d="M123.12,153.89c1.07,0,1.59-3.59,1.59-5.57s-2.67-4.74-2.67-7.23c0-2.13.08-4.49.17-7l-12.23.2c.77,2,1.91,2.91,2.35,5.18,0,1-.13,3.09-.24,3.95-.36,2.81-2,3.37-.24,6.53,1,1.86.36.9-.83,3.11-.07.22-3.19,2.59-3.36,2.81a20.73,20.73,0,0,0-2.36,4.76h15.46C120,158.06,119.92,153.89,123.12,153.89Z">
                </path>
                <path class="cls-1" d="M83.35,91.55l-.07-4.15.91,0a1.16,1.16,0,0,1,.74.21c.17.15.27.69.28,1.64v.08a7,7,0,0,1-.06,1.43,1,1,0,0,1-.26.62,1,1,0,0,1-.62.17Zm-22.84-1c0-4.19.05-8.65.27-13.28l14.45-.79c13.35-.73,26.42-1.46,38.7-1.86,2.09,13.23,4.87,25.41,8,34.27a106.27,106.27,0,0,0-17.08,4l-.1,0-.12,0a119.07,119.07,0,0,0-14.93,5.83l-.12,0-.12.06-.71.35c-5.38-3-13.62-9.34-17.22-13.48C68.32,102.16,64.92,95.41,60.51,90.6Zm48.58-5,0,1.2,1.36,0,.2,11.1,1.44,0-.2-11.1,1.27,0,0-1.21Zm-4.58.13.22,12.3,3.71-.06,0-1.2-2.26,0-.08-4.48,2.11,0,0-1.21-2.11,0L106,86.85l2.23,0,0-1.2Zm-6.25.16.22,12.31,1.46,0-.1-5.88,2.38,5.84,1.51,0-2.57-6.18,2.19-6.12-1.45,0-2.09,5.9-.1-5.87Zm-6.32,2.92a4,4,0,0,0,.15,1.06,5.09,5.09,0,0,0,1.37,2l.82.79A3.39,3.39,0,0,1,95.45,95c0,.43,0,.81,0,1.15a1.29,1.29,0,0,1-.23.76.86.86,0,0,1-.72.26.72.72,0,0,1-.74-.51,6.11,6.11,0,0,1-.23-1.87l0-1.26-1.41,0,0,1.19v.07a7.67,7.67,0,0,0,.3,2.16,2.36,2.36,0,0,0,4,.55,4.83,4.83,0,0,0,.45-2.44,5,5,0,0,0-1.57-3.51l-.86-.88-.35-.35a4,4,0,0,1-.53-.66,2.26,2.26,0,0,1-.23-1.1,2.23,2.23,0,0,1,.21-1.14.82.82,0,0,1,.75-.4.81.81,0,0,1,.46.12,1,1,0,0,1,.3.54,6.68,6.68,0,0,1,.15,1.58v.82l1.39,0,0-.73a10.39,10.39,0,0,0-.17-1.87,1.92,1.92,0,0,0-2.14-1.68,2.06,2.06,0,0,0-1.87.82A4,4,0,0,0,91.94,88.76ZM88.59,86.1l.21,12.31,1.45,0L90,86.07Zm-6.78.18L82,98.58l1.45,0-.11-6,.86,0a1.2,1.2,0,0,1,.79.2c.17.14.27.65.29,1.53a31.33,31.33,0,0,0,.18,4.14l1.44,0a9.48,9.48,0,0,1-.15-2c0-1.18-.07-2.06-.14-2.65a3.6,3.6,0,0,0-.36-1.3,1,1,0,0,0-.71-.47,1.3,1.3,0,0,0,.86-.85,4.39,4.39,0,0,0,.22-1.59c0-.63,0-1.1-.06-1.4A2.34,2.34,0,0,0,86,86.66a2.28,2.28,0,0,0-1.59-.43Zm-6.55.17.22,12.31,2.41,0a2.1,2.1,0,0,0,1.85-.84,5,5,0,0,0,.51-2.66V95c0-1.67-.43-2.65-1.19-2.94a1.45,1.45,0,0,0,.71-.92A5.64,5.64,0,0,0,80,89.4v-.26A3.61,3.61,0,0,0,79.39,87a2.31,2.31,0,0,0-1.9-.6Zm2.36,5.1a.94.94,0,0,0,.6-.15.85.85,0,0,0,.24-.54,7.58,7.58,0,0,0,.06-1.33v-.39q0-1.23-.45-1.44a1.28,1.28,0,0,0-.61-.11l-.72,0,.07,4Zm.17,1.11-1,0,.09,4.89.89,0a.82.82,0,0,0,.82-.5,5.56,5.56,0,0,0,.18-1.84v-.43a4.69,4.69,0,0,0-.23-1.66A.74.74,0,0,0,77.79,92.66Z" id="cut_brisket">
                </path>
                <path class="cls-1" d="M204.57,31.52a2.31,2.31,0,0,1,.11,1l-.17,3.3c0,.64-.15,1-.36,1.15a.62.62,0,0,1-.38.08l-.44,0,.3-5.83.43,0A.56.56,0,0,1,204.57,31.52Zm6.61,0-.53,0-.12,2.42.54,0a.54.54,0,0,0,.36-.07.6.6,0,0,0,.18-.35,3.76,3.76,0,0,0,.09-.83v0c0-.55,0-.88-.1-1A.67.67,0,0,0,211.18,31.51Zm6.78.26a.48.48,0,0,0-.48.27,2.45,2.45,0,0,0-.18,1l-.16,3.23a3.4,3.4,0,0,0,.06,1.12.43.43,0,0,0,.44.31.44.44,0,0,0,.48-.27,3.64,3.64,0,0,0,.17-1.11l.16-3.22a3.22,3.22,0,0,0-.06-1A.42.42,0,0,0,218,31.77Zm11.91,9.88c-4.78-.41-9.86-.67-15.24-.95-5.85-.29-11.91-.6-18.43-1.14l-1.73-.1c-4.86-.24-17.77-.9-18.39-6.23a2.48,2.48,0,0,1,.65-2c2.93-3.31,14-3.38,18.73-3.41h.38c10.81-.08,24,.43,33.91,1.28A98.39,98.39,0,0,1,229.87,41.65Zm-35-11.51L192.47,30l0,.7.79,0-.33,6.47.84.05.33-6.48.73,0Zm2.85.12-2.15-.1-.36,7.17,2.16.11,0-.7-1.32-.07.13-2.61,1.23.06,0-.71-1.23-.06.12-2.45,1.3.06Zm4,.18-.75,0-.14,2.81,0,2.08-1.42-5-.63,0-.36,7.18.78,0,.15-3.12.05-1.81,1.36,5,.62,0Zm3.87,2.12a2.81,2.81,0,0,0-.24-1.46,1.2,1.2,0,0,0-1.11-.56l-1.35-.07-.36,7.18,1.32.06a1.26,1.26,0,0,0,1.16-.43,2.71,2.71,0,0,0,.42-1.57Zm3.32-1.82-2.14-.1-.37,7.17,2.17.11,0-.7-1.32-.07.14-2.61,1.23.06,0-.7-1.23-.07.12-2.45,1.31.06Zm3.71,1.34a1.38,1.38,0,0,0-.3-.92,1.27,1.27,0,0,0-.9-.31l-1.51-.08L209.48,38l.85,0,.17-3.47.5.06a.71.71,0,0,1,.45.15c.1.08.13.38.11.9a18.58,18.58,0,0,0-.06,2.42l.84,0a5.59,5.59,0,0,1,0-1.2,14.57,14.57,0,0,0,0-1.55,2.29,2.29,0,0,0-.16-.76.57.57,0,0,0-.4-.31.76.76,0,0,0,.54-.46,2.57,2.57,0,0,0,.19-.92C212.55,32.52,212.56,32.25,212.55,32.08Zm3,5.45-1.32-.07.32-6.48-.84,0-.36,7.18,2.17.11Zm3.72-4.38a3.88,3.88,0,0,0-.09-1.25A1.17,1.17,0,0,0,218,31a1.37,1.37,0,0,0-1,.31,2.49,2.49,0,0,0-.53,1.66l-.15,3.16a3.24,3.24,0,0,0,.23,1.65,1.18,1.18,0,0,0,1.08.57,1.17,1.17,0,0,0,1.13-.46,3.23,3.23,0,0,0,.39-1.61Zm2.11-1.87-.85,0-.36,7.17.84,0Zm4.2.19-.75,0-.14,2.81,0,2.08-1.42-5-.63,0-.37,7.17.78,0,.16-3.11,0-1.82,1.37,5,.62,0Z" id="cut_tenderloin">
                </path>
                <path class="cls-1" d="M237.77,108l4.74-.7v1.38l-4.73-.67ZM250,111.24c1.38,2.22-1.81,5.11-1.81,6.11L243,130.8l-8,.07a27.23,27.23,0,0,0-1.11-14c-1-2.13-3.56-5.14-3.31-9.48.29-5-.9-8.71-3-11.19a7.62,7.62,0,0,1-3.07-1.63c-3.07,4.65-5,9.59-2.73,16.37.56,1.64-.74,3.42-1.68,4.72a4.79,4.79,0,0,0-.85,1.43v0l-7.05,13.93H212l-7.67.06h-.23a27,27,0,0,0,.73-14.48c-.17-.47-.41-1-.68-1.57-.93-2-2.1-4.56-1.5-7.95a23.88,23.88,0,0,0,.32-2.79l.11,0,.12,0,.59-.28c8.85-4.11,14.69-6.93,15.33-8.51q.85-2.1,1.67-4.34c.28-.75.55-1.51.82-2.28,2.06.36,4.11.66,6.17.9l.13,0H228a86.63,86.63,0,0,0,9.76.56,87.89,87.89,0,0,0,9.64-.56,46,46,0,0,0-.76,8.16C247.37,101.78,247.89,107.85,250,111.24ZM236.12,99.65l9,0V98.61h-4.29L245.08,97v-1.1l-4.54,1.78-4.42-1.69V97l4.26,1.61-4.27,0Zm0,5.16,9,0v-1h-3.89l-2.25.06,6.15-2v-.77l-9,0V102h3.51l2.59-.09-6.1,2.05Zm0,3.81,8.95,1.39v-1l-1.7-.23v-1.63l1.71-.25v-1l-8.95,1.46Zm0,6,9,0v-1.06h-4.34v-1.43h4.34v-1l-9,0v1h3.75v1.44h-3.75Zm9.06,2.88a1.45,1.45,0,0,0-.61-1.37,3.55,3.55,0,0,0-1.77-.36,3.66,3.66,0,0,0-2.58,1.09l-.65.61-.26.25a2.74,2.74,0,0,1-.49.37,1.44,1.44,0,0,1-.8.15,1.54,1.54,0,0,1-.83-.17.58.58,0,0,1-.28-.55.52.52,0,0,1,.1-.33.77.77,0,0,1,.39-.21,4.9,4.9,0,0,1,1.15-.08h.6v-1h-.53a7.3,7.3,0,0,0-1.35.1,1.39,1.39,0,0,0-1.26,1.53,1.49,1.49,0,0,0,.57,1.37,3.37,3.37,0,0,0,2.31.28,3.77,3.77,0,0,0,1.48-1l.59-.58a2.45,2.45,0,0,1,1.75-.82q.47,0,.84,0a.92.92,0,0,1,.55.17.67.67,0,0,1,.18.54.52.52,0,0,1-.39.52,4.26,4.26,0,0,1-1.36.14h-.92v1h.92a5.16,5.16,0,0,0,1.57-.19A1.44,1.44,0,0,0,245.16,117.47Z" id="cut_shank">
                </path>
                <path class="cls-1" d="M189.87,50.92l-.73-.08.37-3.28.72.08a.79.79,0,0,1,.56.24q.18.19.06,1.32v.07a6.44,6.44,0,0,1-.19,1.12.82.82,0,0,1-.27.46A.78.78,0,0,1,189.87,50.92Zm-5.8,4a.61.61,0,0,0,.68-.33,5,5,0,0,0,.32-1.49l.48-4.38a4.14,4.14,0,0,0,0-1.34A.61.61,0,0,0,185,47a.65.65,0,0,0-.68.33,3.62,3.62,0,0,0-.32,1.3L183.51,53a4.83,4.83,0,0,0,0,1.53A.61.61,0,0,0,184.07,55Zm-3.63,4.6a.63.63,0,0,0-.68.33,3.49,3.49,0,0,0-.32,1.29L179,65.57a4.47,4.47,0,0,0,0,1.53.6.6,0,0,0,.58.47.62.62,0,0,0,.67-.34,5,5,0,0,0,.32-1.49l.48-4.37A4.2,4.2,0,0,0,181,60,.58.58,0,0,0,180.44,59.57Zm-5-39.61c7.41.08,16.32-.62,24.46-1.39a68.23,68.23,0,0,1,.73,8c-1.64,0-3.25,0-4.81,0h-.38c-5.32,0-16.37.1-19.69,3.84a3.72,3.72,0,0,0-1,3c.74,6.42,14,7.09,19.6,7.38l1.7.1,4.08.31c-.36,4.18-.88,8.45-1.5,12.68v0c-1.42,9.69-3.38,19.18-5.11,27.09-7.88-1.92-16.76-3.91-27.42-5.71,2.64-19.32,3.72-40,2.12-55.67C170.67,19.79,173.06,19.93,175.45,20Zm9.7,39.29L184,59.12l-1.08,9.75,1.15.12ZM193,48l1.07.12-1,8.79,1.14.12,1-8.78,1,.11.11-1-3.22-.35Zm-5.6,8.24,1.14.13.52-4.71.68.12a1,1,0,0,1,.6.24c.12.12.15.54.07,1.23a24.35,24.35,0,0,0-.27,3.29l1.14.13a7.24,7.24,0,0,1,.09-1.63c.1-.93.15-1.63.15-2.11a2.8,2.8,0,0,0-.15-1.06.73.73,0,0,0-.51-.44,1.07,1.07,0,0,0,.77-.59,3.77,3.77,0,0,0,.33-1.23,10.33,10.33,0,0,0,.09-1.11,1.86,1.86,0,0,0-.33-1.27,1.75,1.75,0,0,0-1.21-.5l-2-.23Zm-.56,3.2-1.08,9.74,1.06.11.47-4.22.2-2.47,1.45,6.93.84.09,1.07-9.74-1-.11-.42,3.81-.19,2.83-1.53-6.88Zm-4.28-4.36A1.63,1.63,0,0,0,184,56a1.6,1.6,0,0,0,1.56-.53,4.33,4.33,0,0,0,.67-2.17l.48-4.29a5.3,5.3,0,0,0,0-1.72A1.59,1.59,0,0,0,185.11,46a1.87,1.87,0,0,0-1.43.34,3.32,3.32,0,0,0-.84,2.21l-.48,4.3A4.35,4.35,0,0,0,182.55,55.1Zm-.44,4.74a1.59,1.59,0,0,0-1.55-1.26,1.85,1.85,0,0,0-1.42.34,3.29,3.29,0,0,0-.85,2.21l-.48,4.3a4.46,4.46,0,0,0,.19,2.26,1.63,1.63,0,0,0,1.43.86A1.6,1.6,0,0,0,181,68a4.42,4.42,0,0,0,.68-2.17l.47-4.29A5.3,5.3,0,0,0,182.11,59.84ZM176.72,55l1.15.13.52-4.72,1.56.17-.52,4.72,1.14.13,1.08-9.74-1.15-.13-.45,4.08-1.56-.17.45-4.08-1.15-.13ZM174.93,67l1-8.79L174.75,58l-1.07,9.74,2.94.33.1-1Zm-.28-22.19a1.63,1.63,0,0,0-1.56.45,3.28,3.28,0,0,0-.57,1.64,3,3,0,0,0,0,.85,3.9,3.9,0,0,0,.88,1.72l.56.71a2.66,2.66,0,0,1,.68,2c0,.34-.08.64-.12.91a1.08,1.08,0,0,1-.25.58.75.75,0,0,1-.61.13.58.58,0,0,1-.53-.48,5.25,5.25,0,0,1,0-1.5l.11-1-1.11-.13-.1,1v0a5.8,5.8,0,0,0,0,1.74,1.88,1.88,0,0,0,3.1.84,3.91,3.91,0,0,0,.61-1.88,4,4,0,0,0-.89-2.94l-.59-.77a2.81,2.81,0,0,0-.24-.32,2.82,2.82,0,0,1-.35-.57,2.34,2.34,0,0,1,.22-1.78.62.62,0,0,1,.63-.23.53.53,0,0,1,.34.14.79.79,0,0,1,.19.45,5.15,5.15,0,0,1,0,1.26l-.08.66,1.1.12.06-.58a8,8,0,0,0,.06-1.49A1.53,1.53,0,0,0,174.65,44.77Z" id="cut_shortloin">
                </path>
                <path class="cls-1" d="M153.2,48a10.39,10.39,0,0,1,.49,3.54v.91a11.31,11.31,0,0,1-.38,3.92,1.75,1.75,0,0,1-1.75,1.05l-1.88,0-.19-10.4,2.05,0A1.59,1.59,0,0,1,153.2,48Zm-24-2.41a2,2,0,0,0,1.31-.37,2.19,2.19,0,0,0,.57-1.31,17.74,17.74,0,0,0,.12-3v-.18c0-2-.24-3.17-.61-3.48A2.25,2.25,0,0,0,129,36.8l-1.94,0,.16,8.83Zm-16.8-35.25c7.06,2.28,13.2,6,19.47,6,11.25-.61,23.24,2,35.12,3.13,1.62,15.55.56,36.27-2.08,55.57-13.32-2.14-30.6-2.32-49.87-1.71C111.69,51.76,110.26,27.54,112.37,10.38Zm33.81,23.48L146.65,60l5.12-.1a4.43,4.43,0,0,0,3.94-1.77q1.11-1.72,1.09-5.65V52c-.06-3.54-.91-5.62-2.53-6.25a3.16,3.16,0,0,0,1.52-1.95,12.1,12.1,0,0,0,.36-3.63v-.56c0-2.14-.44-3.64-1.17-4.53s-2.07-1.31-4.05-1.27Zm-7.84.21.47,26.17,3.08-.05L141.42,34Zm-14.41.38.47,26.17,3.08,0-.23-12.65,1.83.08a2.61,2.61,0,0,1,1.67.42c.38.3.58,1.38.62,3.26q.13,8.34.39,8.81l3.06-.05a21,21,0,0,1-.31-4.36c0-2.5-.15-4.37-.31-5.63a7.47,7.47,0,0,0-.76-2.76,2,2,0,0,0-1.51-1,2.78,2.78,0,0,0,1.84-1.8,9.46,9.46,0,0,0,.46-3.39c0-1.34-.07-2.33-.14-3a5,5,0,0,0-1.29-3.26,4.78,4.78,0,0,0-3.38-.91ZM151.2,44.71a2.1,2.1,0,0,0,1.26-.32,1.82,1.82,0,0,0,.53-1.16,17.4,17.4,0,0,0,.11-2.83v-.82c0-1.74-.36-2.76-1-3.07a2.72,2.72,0,0,0-1.3-.22l-1.51,0,.15,8.42Z" id="cut_rib">
                </path>
                <path class="cls-1" d="M219.35,20.11a2.81,2.81,0,0,1,.09.85l0,2.81a2.94,2.94,0,0,1-.11,1,.39.39,0,0,1-.4.26.4.4,0,0,1-.4-.26,3.54,3.54,0,0,1-.09-1l0-2.81a2.58,2.58,0,0,1,.12-.84.42.42,0,0,1,.41-.25A.39.39,0,0,1,219.35,20.11Zm-5.92-.19a.58.58,0,0,0-.37-.11h-.47v2.11H213a.54.54,0,0,0,.32-.08.53.53,0,0,0,.14-.31,4.18,4.18,0,0,0,.05-.73v0Q213.57,20,213.43,19.92Zm14.5-1.77a57.23,57.23,0,0,1,1.71,9.65c-8.1-.69-18.37-1.15-27.72-1.25a68.9,68.9,0,0,0-.74-8.11c6.57-.63,12.55-1.29,16.71-1.58a38.09,38.09,0,0,1,10,1A.76.76,0,0,0,227.93,18.15Zm-18.77,5.67a2.55,2.55,0,0,0-.75-1.8l-.43-.46-.17-.18a2,2,0,0,1-.26-.34,1.17,1.17,0,0,1-.1-.56,1.12,1.12,0,0,1,.12-.58.43.43,0,0,1,.39-.2.52.52,0,0,1,.23.07.56.56,0,0,1,.15.28,4.38,4.38,0,0,1,0,.8v.42h.7v-.37A5.16,5.16,0,0,0,209,20a1,1,0,0,0-1.07-.88,1,1,0,0,0-1,.39,2,2,0,0,0-.26,1.07,2.12,2.12,0,0,0,.06.54,2.62,2.62,0,0,0,.67,1l.41.41a1.74,1.74,0,0,1,.56,1.23c0,.22,0,.41,0,.58a.67.67,0,0,1-.12.39.49.49,0,0,1-.38.12.37.37,0,0,1-.37-.27,3.46,3.46,0,0,1-.09-1V23h-.72v.65a3.69,3.69,0,0,0,.12,1.09,1,1,0,0,0,1.07.76,1,1,0,0,0,1-.42A2.44,2.44,0,0,0,209.16,23.82Zm1.62-4.63h-.73L210,25.44h.74Zm3.52,6.3a5.93,5.93,0,0,1-.05-1,12.68,12.68,0,0,0,0-1.35,1.67,1.67,0,0,0-.17-.66.47.47,0,0,0-.35-.25.72.72,0,0,0,.45-.42,2.37,2.37,0,0,0,.13-.81,6.57,6.57,0,0,0,0-.71,1.18,1.18,0,0,0-.28-.79,1.24,1.24,0,0,0-.81-.24h-1.31l-.05,6.26h.74l0-3,.44,0a.64.64,0,0,1,.4.11,1.42,1.42,0,0,1,.12.78,16.09,16.09,0,0,0,0,2.11Zm2.79-.57h-1.15l.05-5.64h-.74l-.05,6.25,1.89,0ZM220.17,21a3.65,3.65,0,0,0-.13-1.09,1,1,0,0,0-1.07-.69,1.14,1.14,0,0,0-.88.3A2.13,2.13,0,0,0,217.7,21l0,2.76a2.85,2.85,0,0,0,.27,1.42,1,1,0,0,0,1,.46,1,1,0,0,0,1-.44,2.79,2.79,0,0,0,.29-1.42Zm1.76-1.66h-.73l-.06,6.26h.74Zm3.66,0h-.65l0,2.45.06,1.81-1.41-4.27H223l0,6.25h.68l0-2.72,0-1.58L225,25.64h.54Z" id="cut_sirloin">
                </path>
                <path class="cls-1" d="M69.15,19.14C64.87,35.35,61.82,57,60.84,76l14.32-.78c13.3-.74,26.32-1.46,38.57-1.87C110.39,51.63,109,27.24,111.13,10a31.38,31.38,0,0,0-8.89-1.39C89.33,8.61,79.49,15.05,69.15,19.14ZM82.73,67.49a2.65,2.65,0,0,1-2.45,1.33,7.6,7.6,0,0,1-3.52-1.56l-5.59-3.91a8.56,8.56,0,0,1-2.06-1.82,4,4,0,0,1-.67-1.28A3,3,0,0,1,69,57.84a2.62,2.62,0,0,1,3.1-1.17A9.48,9.48,0,0,1,74.66,58l1.48,1L75.06,60.6l-1.49-1a8.68,8.68,0,0,0-1.84-1.08,1.37,1.37,0,0,0-.84-.08,1,1,0,0,0-.5.4,1.06,1.06,0,0,0,0,1.29,6.83,6.83,0,0,0,1.72,1.56l5.81,4.06A8.58,8.58,0,0,0,80.19,67a1,1,0,0,0,1.19-.42,1,1,0,0,0,0-1.26,9.12,9.12,0,0,0-2-1.7l-1.48-1L79,61l1.47,1a7.71,7.71,0,0,1,2.7,2.75A2.57,2.57,0,0,1,82.73,67.49Zm5.6-8.34-6.5-4.55-1.51,2.15,6.51,4.55-1.11,1.58L72.3,53.49l1.1-1.57L79,55.85l1.51-2.15-5.63-3.93L76,48.19l13.42,9.38Zm4.61-6.25a2.83,2.83,0,0,1-2.3,1.45A5.85,5.85,0,0,1,87.47,53l-10-7,1.1-1.57,9.93,6.94a7.72,7.72,0,0,0,1.69,1,1.75,1.75,0,0,0,.58,0,1,1,0,0,0,.8-.53,1.16,1.16,0,0,0,.23-1,2,2,0,0,0-.77-.93l-1-.74-10-6.95,1.1-1.57,10,7a6.07,6.07,0,0,1,2.33,2.51A2.8,2.8,0,0,1,92.94,52.9ZM98,45.64A2.65,2.65,0,0,1,95.56,47,7.67,7.67,0,0,1,92,45.42L86.45,41.5a8.79,8.79,0,0,1-2.06-1.81,4.09,4.09,0,0,1-.67-1.29A3,3,0,0,1,84.3,36a2.62,2.62,0,0,1,3.1-1.17,9.48,9.48,0,0,1,2.54,1.35l1.48,1-1.07,1.54-1.5-1A8.68,8.68,0,0,0,87,36.63a1.45,1.45,0,0,0-.84-.08,1,1,0,0,0-.5.4,1.05,1.05,0,0,0,0,1.29,6.48,6.48,0,0,0,1.72,1.56l5.8,4.06a8.58,8.58,0,0,0,2.29,1.28,1,1,0,0,0,1.19-.42,1,1,0,0,0,0-1.26,9.12,9.12,0,0,0-2-1.7l-1.48-1,1.09-1.56,1.47,1a7.84,7.84,0,0,1,2.71,2.75A2.6,2.6,0,0,1,98,45.64ZM103.86,37,95.7,35l6.42,4.48L101,41,87.58,31.64l1.11-1.57,6.39,4.47-4.72-6.86,1.11-1.58,4.87,7.13L105,35.3Z" id="cut_chuck">
                </path>
                <path class="cls-1" d="M158.2,108.56a251.79,251.79,0,0,0,6.5-32.23c-13.18-2.12-30.33-2.31-49.48-1.71,2.09,13.19,4.87,25.3,8,34.08C138.74,100.71,147.36,105.59,158.2,108.56Zm-1.32-26.72,0,1.58-2.92,0,.1,5.5,2.76,0,0,1.58-2.77,0,.11,5.86,2.95,0,0,1.57-4.84.09-.29-16.09ZM150.5,82l0,1.57-1.65,0,.26,14.52-1.89,0L147,83.64l-1.77,0,0-1.58Zm-21.18,7.2a4.31,4.31,0,0,1-.83,2.42,2.7,2.7,0,0,1-2.07.79l-1.34,0,.11,6.32-1.89,0L123,82.7l3.24-.06A2.5,2.5,0,0,1,129,84.37a9,9,0,0,1,.39,2.6C129.38,88,129.36,88.71,129.32,89.21Zm2.11,9.37-.28-16.1,1.89,0L133.3,97l3-.06,0,1.57Zm5.8-.16,2.16-16.14,2.27,0,3,16.05-1.78,0-.52-3.07-2.91.06L139,98.38Zm-9.76-11.26v.32a8.67,8.67,0,0,1-.22,2.64,1,1,0,0,1-1.06.73l-1.15,0-.12-6.71,1.2,0a1,1,0,0,1,1,.68A7.48,7.48,0,0,1,127.47,87.16Zm14.58,6.56-2.47,0,1-8.52h0Z" id="cut_plate">
                </path>
                <path class="cls-1" d="M203,102.89l.1,0,.11,0h0c5.3-2.47,14.17-6.59,14.68-7.82.65-1.62,1.29-3.3,1.91-5l.48-1.34c-3.59-.67-7.23-1.48-11-2.4l-.23-.06-.23-.06c-2.33-.56-4.72-1.16-7.2-1.79C191.68,81.8,180.48,79,166,76.54a252.7,252.7,0,0,1-6.52,32.35c1.19.3,2.42.57,3.69.8H163c4.11,1.3,6,.82,7.18,3.83s4,1.46,5.18,1c2.58-.86,7.95-4.42,12.93-6.52,1.77-.45,3.52-.94,5.26-1.51.32,0,.39-.06.14,0h0a69.61,69.61,0,0,0,9.32-3.83A1.85,1.85,0,0,1,203,102.89ZM187.62,86.77l1.25.18L190.79,97l.4-4.11.79-5.53,1.47.2-2,14.14-1.23-.17-1.79-10.15L188,95l-.87,6.13-1.54-.21Zm-6-.92,2,.28.34,14.47-1.57-.22,0-2.76-2.56-.36L179,99.91l-1.59-.22ZM176,85l-1.8,12.77,2.61.36-.2,1.38-4.27-.61,2-14.13Zm-7.65-1.14,4.25.61-.19,1.39-2.61-.37L169.2,90l2.45.35-.2,1.41L169,91.37l-1,6.88L166.37,98Zm29.67,18.87-1.66-7.14-1,6.77-1.68-.24,1.5-10.61,0-.12,0-.13.27-1.89v-.11l0-.12.16-1.16,1.67.24-.08.51v.12l0,.11-.55,3.91,0,.12,0,.12L196.46,95l.75-1.37,0-.09.05-.09,2.63-4.84,1.67.24-3.1,5.66-.05.08,0,.09-.42.78,1.8,7.56Zm-15.72-6.5-2.17-.3,2.09-7.33h0Z" id="cut_flank">
                </path>
                <path class="cls-1" d="M203.92,58.18q.24.2.12,1v0l0,.22a5,5,0,0,1-.19.86.59.59,0,0,1-.23.32.63.63,0,0,1-.4,0l-.53-.09.43-2.57.46.08A1,1,0,0,1,203.92,58.18Zm-.77,3.18-.63-.1L202,64.43l.57.1a.55.55,0,0,0,.6-.23,3.42,3.42,0,0,0,.33-1.17l0-.28a3.35,3.35,0,0,0,.05-1.1A.49.49,0,0,0,203.15,61.36Zm11.06,16.15a.49.49,0,0,0,.57-.24,4.21,4.21,0,0,0,.33-1.22l.6-3.59a3.15,3.15,0,0,0,.06-1.1.49.49,0,0,0-.44-.41.53.53,0,0,0-.57.24,3.22,3.22,0,0,0-.33,1.06l-.6,3.59a4,4,0,0,0-.08,1.26A.5.5,0,0,0,214.21,77.51ZM207.9,58.74a.5.5,0,0,0-.57.24A2.68,2.68,0,0,0,207,60l-.6,3.59a4,4,0,0,0-.08,1.26.57.57,0,0,0,1,.17,4.21,4.21,0,0,0,.33-1.22l.6-3.58a3.49,3.49,0,0,0,.06-1.11A.48.48,0,0,0,207.9,58.74Zm-.11,10.95-.59-.1-.45,2.7.6.1a.64.64,0,0,0,.41,0A.68.68,0,0,0,208,72a5.63,5.63,0,0,0,.21-.92v0c.1-.62.11-1,0-1.09A.65.65,0,0,0,207.79,69.69ZM216.84,67a.49.49,0,0,0,.57-.25,4,4,0,0,0,.33-1.21l.6-3.59a3.15,3.15,0,0,0,.06-1.1.48.48,0,0,0-.44-.41.53.53,0,0,0-.57.24,3.15,3.15,0,0,0-.33,1l-.6,3.59a4.08,4.08,0,0,0-.08,1.27A.5.5,0,0,0,216.84,67Zm3.86,20.33c-2.84-.52-5.7-1.13-8.65-1.82l-.24-.06-.23,0c-3.11-.73-6.32-1.54-9.7-2.39l-7.08-1.76c1.7-7.79,3.63-17.1,5-26.64,8,.92,13.77,1.38,21.05,2l7.3.6A184.67,184.67,0,0,1,222.14,83a.56.56,0,0,0,0,.12s0,.08,0,.12C221.62,84.61,221.16,86,220.7,87.36ZM213,77.55a1.32,1.32,0,0,0,1.13.77A1.34,1.34,0,0,0,215.4,78a3.64,3.64,0,0,0,.65-1.76l.59-3.52a4.44,4.44,0,0,0,.06-1.42,1.31,1.31,0,0,0-1.23-1.11,1.51,1.51,0,0,0-1.18.21,2.7,2.7,0,0,0-.81,1.79l-.59,3.52A3.53,3.53,0,0,0,213,77.55Zm4.94,1.34,1.34-8-.94-.16-1.33,8Zm6-7.19-.83-.14-.53,3.13L222.26,77l-.94-5.75-.71-.11-1.33,8,.86.15.58-3.47.28-2,.88,5.78.69.12Zm-4.4-3.46.83.14.54-3.21.42-3,.1,6.36.85.14,2.12-6-.58,3-.54,3.21.84.14,1.34-8-1.18-.2-2.18,6.39,0-6.76-1.17-.2Zm-3.4-6.57-.58,3.52a3.4,3.4,0,0,0,.05,1.87,1.63,1.63,0,0,0,2.45.42,3.64,3.64,0,0,0,.65-1.76l.59-3.52a4.44,4.44,0,0,0,.06-1.42,1.31,1.31,0,0,0-1.23-1.11,1.51,1.51,0,0,0-1.18.21A2.74,2.74,0,0,0,216.11,61.67Zm-3.09-2,.88.14-1.2,7.21.93.16L214.84,60l.82.14.13-.78-2.64-.45Zm-2-.36-1.2,7.21.93.16L212,59.51l.82.14.13-.78-2.64-.44-.13.78Zm-8.4,9.72a1.27,1.27,0,0,0-1.19-1.35,1.34,1.34,0,0,0-1.31.31,2.6,2.6,0,0,0-.55,1.32,2.87,2.87,0,0,0,0,.7,3.38,3.38,0,0,0,.65,1.47l.43.61a2.21,2.21,0,0,1,.47,1.68c0,.27-.09.52-.14.74a.87.87,0,0,1-.24.47.59.59,0,0,1-.5.08.49.49,0,0,1-.42-.42,4.19,4.19,0,0,1,.08-1.24l.14-.82-.92-.15-.13.78v0a4.91,4.91,0,0,0-.07,1.44,1.31,1.31,0,0,0,1.22,1.18,1.33,1.33,0,0,0,1.31-.34A3.22,3.22,0,0,0,202,74a3.29,3.29,0,0,0-.6-2.46l-.44-.67-.19-.27a2.91,2.91,0,0,1-.26-.49,1.46,1.46,0,0,1,0-.74,1.52,1.52,0,0,1,.28-.72.52.52,0,0,1,.53-.16.49.49,0,0,1,.28.13.65.65,0,0,1,.13.38,4.78,4.78,0,0,1-.09,1l-.09.54.9.15.08-.47A7.7,7.7,0,0,0,202.61,69.07Zm2.39-.63-.94-.15-1.33,8,.94.15Zm-.14-10.54a1.53,1.53,0,0,0-1.16-.62L202.26,57l-1.34,8,1.56.26a1.35,1.35,0,0,0,1.3-.32,3.25,3.25,0,0,0,.65-1.65l0-.17c.18-1.08,0-1.76-.41-2a1.08,1.08,0,0,0,.57-.51,4,4,0,0,0,.31-1.09l0-.17A2.29,2.29,0,0,0,204.86,57.9Zm4.38,12.6a1.55,1.55,0,0,0-.2-1.06,1.49,1.49,0,0,0-1-.47l-1.68-.28-1.33,8,.94.15.64-3.85.55.12a.78.78,0,0,1,.49.23q.15.17,0,1a23.62,23.62,0,0,0-.38,2.7l.94.16a6,6,0,0,1,.15-1.34,15.93,15.93,0,0,0,.22-1.74,2.23,2.23,0,0,0-.07-.88.66.66,0,0,0-.41-.39.86.86,0,0,0,.67-.44,3.07,3.07,0,0,0,.33-1A8.5,8.5,0,0,0,209.24,70.5Zm0-11.46A1.32,1.32,0,0,0,208,57.93a1.54,1.54,0,0,0-1.19.21,2.74,2.74,0,0,0-.8,1.79l-.59,3.52a3.64,3.64,0,0,0,0,1.88,1.35,1.35,0,0,0,1.14.77,1.34,1.34,0,0,0,1.32-.36,3.74,3.74,0,0,0,.65-1.76l.59-3.52A4.74,4.74,0,0,0,209.27,59Zm2.51,18.79.14-.78-1.48-.24,1.21-7.22-.94-.16-1.34,8Z" id="buttomsirloin">
                </path>
                <path class="cls-1" d="M237.87,80.54l-6.07-.74.16-1.33a1.55,1.55,0,0,1,.46-1c.25-.23,1.06-.26,2.45-.09l.12,0a11.6,11.6,0,0,1,2.07.38,1.49,1.49,0,0,1,.85.51,1.4,1.4,0,0,1,.13.93ZM233.57,70a6.58,6.58,0,0,0,2.39.62l8.09,1a9.37,9.37,0,0,0,2.83.06,1.28,1.28,0,0,0,.27-2.32,9.16,9.16,0,0,0-2.75-.63l-8.08-1a7.87,7.87,0,0,0-2.48,0,1.08,1.08,0,0,0-.86,1A1.19,1.19,0,0,0,233.57,70Zm14.5-31.25-8.28-1a5.51,5.51,0,0,0-2.48.11,1.37,1.37,0,0,0-.89,1.22l-.13,1.08,14.62,1.78.13-1.08a1.69,1.69,0,0,0-.13-1C250.61,39.31,249.67,38.94,248.07,38.75ZM228.62,88.51c-2.22-.24-4.42-.55-6.64-.93q.79-2.31,1.53-4.71l0-.12,0-.12a186.65,186.65,0,0,0,6-25.85s0-.07,0-.11,0,0,0-.06c.74-4.78,1.26-9.52,1.52-14.12l0-.09a.69.69,0,0,0,0-.13,100.31,100.31,0,0,0-.12-13.7h0s0-.06,0-.1a59,59,0,0,0-1.73-10.34c2.09.43,4.19.88,6.29,1.16,4.14.74,10.41.2,15.95,1.79-2.34,4.37-1.72,10.33,1.8,15.58a21,21,0,0,0,9,7.41C260.34,59,250.76,72.91,247.62,88.43a85.38,85.38,0,0,1-18.75.11l-.12,0ZM234.35,42l18,2.2.4-3.31a3.26,3.26,0,0,0-.87-3A7.21,7.21,0,0,0,248,36.59l-7.91-1a7,7,0,0,0-3.71.34,3.07,3.07,0,0,0-1.63,2.69Zm-1.17,10.38,18,2.2.24-2-7.81-.95-4.56-.43,12.85-2.54.19-1.55-18-2.2-.23,1.87,7,.87,5.24.42-12.77,2.67Zm-1.13,10L245.43,64a6.52,6.52,0,0,0,3.78-.36A3.16,3.16,0,0,0,250.7,61a3.11,3.11,0,0,0-.82-2.89,6.65,6.65,0,0,0-3.58-1.24l-13.38-1.63-.26,2.1L246,59c.35,0,.81.11,1.38.2a2.07,2.07,0,0,1,1.23.52,1.23,1.23,0,0,1,.3,1.09,1.14,1.14,0,0,1-.51,1,2.39,2.39,0,0,1-.59.24,8.71,8.71,0,0,1-2.17-.11l-13.33-1.63Zm-.3,8.76c.68.82,2,1.37,4.08,1.62l7.94,1a8,8,0,0,0,4.19-.3,3.64,3.64,0,0,0,.68-5.53,8.1,8.1,0,0,0-4-1.28l-7.94-1a10.1,10.1,0,0,0-3.18,0,2.93,2.93,0,0,0-2.36,2.85A3.38,3.38,0,0,0,231.75,71.14ZM229.9,81.38l0,.33,2.88.36H233l14.9,1.82.25-2.11-8.69-1.06.22-1.26a1.73,1.73,0,0,1,.46-1.1c.23-.23,1-.26,2.29-.11a48.31,48.31,0,0,0,6.08.58l.26-2.11a13.67,13.67,0,0,1-3-.2,38.48,38.48,0,0,0-3.9-.33,5,5,0,0,0-2,.26,1.36,1.36,0,0,0-.83.93A2,2,0,0,0,238,76a6.43,6.43,0,0,0-2.28-.64c-.92-.12-1.61-.18-2.05-.19a3.43,3.43,0,0,0-2.36.57,3.34,3.34,0,0,0-1,2.23l-.39,3.21v.12Z" id="cut_round">
                </path>
                <path class="cls-1" d="M260.42,27.56a14.16,14.16,0,0,0-7.68-6.1c-2.25,4-1.69,9.55,1.62,14.47a19.64,19.64,0,0,0,8.07,6.86c.07-.68.11-1.36.15-2,.16.73.3,1.49.4,2.28a19.31,19.31,0,0,0,4.68,1.28C268.07,37.49,266.62,31.48,260.42,27.56Zm-7.89,1.74a1,1,0,0,1-.17-.94,2.53,2.53,0,0,1,.89-.95l2-1.44a1.91,1.91,0,0,1,1.27-.48,1.06,1.06,0,0,1,.69.48.91.91,0,0,1,.06,1.14,3.05,3.05,0,0,1-.73.67l-2,1.44a2.48,2.48,0,0,1-1.18.54A.94.94,0,0,1,252.53,29.3Zm2,2.68,1.24-1.59-1.87.72-.35-.49,2.89-1.08,1.69-2.17.34.47-1.2,1.54,1.8-.7.34.48-2.79,1-1.76,2.25Zm2.17,3-.38-.53,3.77-2.7.35-.25-.36-.5.44-.32,1.08,1.51-.45.32-.33-.47-.58.41Zm1.65,2.3.78-.75-.59-.83-1,.51-.37-.52L260.64,34l1.53-.77.13-.07.46.65-.44.44-1.24,1.23-2.35,2.35Zm6.69-.32-2.44,1.75-.47.33-1.21.87.6.85-.44.31-1-1.38L262,38.38l.65-.47,2.06-1.47Zm-.95-1.32-1.55,1.11-.88.63-2.14,1.53-.38-.54,2.31-1.66,1-.74,1.21-.87Zm-7.91-8.43-2,1.47a3,3,0,0,1-.76.43A.35.35,0,0,1,253,29a.36.36,0,0,1,0-.43,3,3,0,0,1,.66-.58l2.05-1.46a1.87,1.87,0,0,1,.68-.36.36.36,0,0,1,.39.16.33.33,0,0,1,0,.42A2.56,2.56,0,0,1,256.2,27.22Zm5.49,6.85-.79.77-1.36,1.32-.5-.7,1.77-.93.88-.46Z" id="cut_oxtail">
                </path>
            </svg>
        </div>
            <div class="cut-selected-card">
                <div class="cut-selected-card-backdrop">
                    <img src="./img/common/leaf.png" alt="">
                    <img src="./img/common/leaf.png" alt="">
                </div>
                <!-- replace me! -->
            </div>
</div>`;
	let append = '';
	try {
		/**
		 * @type {Cut_card[]}
		 */
		const cards = await get_cuts();
		append = cards.map((cut) => generateCutCard(cut)).join('');
	} catch (error) {
		console.log('Error fetching cuts', error);
	}
	return cut.replace('<!-- replace me! -->', append);
}

/**
 *
 * @param {Cut_card} cut
 */
function generateCutCard(cut) {
	const selected_cut = 'cut_tenderloin';
	let classList = '';
	if (cut.cut_id == selected_cut) {
		classList += 'selected-cut';
	}
	const cut_card_template = `
    <div id='${cut.cut_id}' class="cut-card ${classList}">
        <div class="cut-selected-card-img">
            <img src="${backend_url}${cut.cut_path_img}" alt="">
        </div>
        <div class="cut-selected-info">
            <div class="cut-selected-header text-header">${cut.cut_name}</div>
            <div class="cut-selected-stats">
                <div class="cut-stat-price">
                    <div class="cut-stat-and-value text-sub-header">
                        <span class="stat-name text-header">Price</span>
                        ${cut.cut_price_level}
                    </div>
                    <div class="cut-stat-bar">
                        <div class="stat-bar-percent" style="width: ${
							toPercentage[cut.cut_price_level]
						}%;"></div>
                    </div>
                </div>
                <div class="cut-stat-price">
                    <div class="cut-stat-and-value text-sub-header">
                        <span class="stat-name text-header">Marbling</span>
                        ${cut.cut_marbling_level}
                    </div>
                    <div class="cut-stat-bar">
                        <div class="stat-bar-percent" style="width: ${
							toPercentage[cut.cut_marbling_level]
						}%;"></div>
                    </div>
                </div>
            </div>
            <div class="cut-selected-text text-para-light">
                ${cut.cut_info}
            </div>
        </div>
    </div>
    `;
	return cut_card_template;
}
