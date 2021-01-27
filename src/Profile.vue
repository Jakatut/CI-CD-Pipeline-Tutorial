<template>
    <div id="profile">
        <ProfileImage
            imageURL="https://scontent.fyto1-2.fna.fbcdn.net/v/t1.0-1/p200x200/130744173_10222037405357624_5220377676597486888_o.jpg?_nc_cat=108&ccb=2&_nc_sid=7206a8&_nc_ohc=4vapU5_KfegAX9J-YDG&_nc_ht=scontent.fyto1-2.fna&tp=6&oh=013cdce182fe62fd27ae0ab179462870&oe=6037D1A1"
        />
        <h1>{{ $auth.user.name }}</h1>
        <div>
            <img
                src="https://www.disabled-world.com/pics/1/dw-qr-code.png"
                alt="qr-code"
                height="200px"
                width="200px"
            />
        </div>
        <StreamBubble type="netflix" />
    </div>
</template>

<script>
import ProfileImage from './components/ProfileImage';
import StreamBubble from './components/StreamBubble';
export default {
    name: 'Profile',
    data() {
        return {
            name: 'username',
        };
    },
    components: {
        ProfileImage,
        StreamBubble,
    },
};
</script>
