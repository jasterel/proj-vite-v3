import { defineComponent, computed, ref } from 'vue';
import { usePostStore } from '../stores/postStore';
export default defineComponent({
    name: 'HomeView',
    setup() {
        const postStore = usePostStore();
        // Реактивные свойства для Pinia Store
        const posts = computed(() => postStore.posts);
        const isLoading = computed(() => postStore.isLoading);
        const error = computed(() => postStore.error);
        // Форма для добавления нового поста
        const newPost = ref({
            title: '',
            body: '',
            userId: 1, // Статический userId
        });
        // Текущее редактирование поста
        const editingPost = ref(null);
        // Действия Pinia Store
        const fetchPosts = postStore.fetchPosts;
        const addPost = postStore.addPost;
        const editPost = postStore.editPost;
        const deletePost = postStore.deletePost;
        // Добавление нового поста
        const handleAddPost = () => {
            addPost(newPost.value);
            newPost.value = { title: '', body: '', userId: 1 }; // Очистка формы
        };
        // Начало редактирования
        const startEditing = (post) => {
            editingPost.value = { ...post }; // Копируем свойства поста
        };
        // Завершение редактирования
        const handleEditPost = () => {
            if (editingPost.value) {
                editPost(editingPost.value); // Сохраняем изменения
                editingPost.value = null; // Закрываем форму редактирования
            }
        };
        // Отмена редактирования
        const cancelEditing = () => {
            editingPost.value = null;
        };
        return {
            posts,
            isLoading,
            error,
            newPost,
            editingPost,
            fetchPosts,
            handleAddPost,
            startEditing,
            handleEditPost,
            cancelEditing,
            deletePost,
        };
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.handleAddPost) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ placeholder: ("Post Title"), required: (true), });
    (__VLS_ctx.newPost.title);
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({ value: ((__VLS_ctx.newPost.body)), placeholder: ("Post Body"), required: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.fetchPosts) }, disabled: ((__VLS_ctx.isLoading || __VLS_ctx.posts.length > 0)), });
    (__VLS_ctx.posts.length > 0 ? "Posts Loaded" : "Load Posts");
    if (__VLS_ctx.error) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.error);
    }
    if (!__VLS_ctx.isLoading && __VLS_ctx.posts.length) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
        for (const [post] of __VLS_getVForSourceType((__VLS_ctx.posts))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((post.id)), });
            const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
            /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
            // @ts-ignore
            const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: (({ name: 'Post', params: { id: post.id } })), }));
            const __VLS_2 = __VLS_1({ to: (({ name: 'Post', params: { id: post.id } })), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
            (post.title);
            __VLS_nonNullable(__VLS_5.slots).default;
            var __VLS_5;
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                        if (!((!__VLS_ctx.isLoading && __VLS_ctx.posts.length)))
                            return;
                        __VLS_ctx.startEditing(post);
                    } }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                        if (!((!__VLS_ctx.isLoading && __VLS_ctx.posts.length)))
                            return;
                        __VLS_ctx.deletePost(post.id);
                    } }, });
        }
    }
    if (__VLS_ctx.isLoading) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
    if (__VLS_ctx.editingPost) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.handleEditPost) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ placeholder: ("Post Title"), required: (true), });
        (__VLS_ctx.editingPost.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({ value: ((__VLS_ctx.editingPost.body)), placeholder: ("Post Body"), required: (true), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.cancelEditing) }, type: ("button"), });
    }
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
let __VLS_self;
