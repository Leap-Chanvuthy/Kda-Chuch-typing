import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function UpdateProfileInformation({ mustVerifyEmail, status, className = '' }) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
        bio: user.bio,
        keyboard: user.keyboard,
        twitter: user.twitter,
        github: user.github,
        website: user.website,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (
        <main className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Profile Information</h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>
                <div>
                    <InputLabel htmlFor="bio" value="Bio" />

                    <TextInput
                        id="bio"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.bio}
                        onChange={(e) => setData('bio', e.target.value)}
                    />

                    <InputError className="mt-2" message={errors.bio} />
                </div>
                <div>
                    <InputLabel htmlFor="keyboard" value="Keyboard" />

                    <TextInput
                        id="keyboard"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.keyboard}
                        onChange={(e) => setData('keyboard', e.target.value)}
                    />

                    <InputError className="mt-2" message={errors.keyboard} />
                </div>
                <div>
                    <InputLabel htmlFor="twitter" value="Twitter Username" />

                    <div className='flex justify-evenly items-center'>
                        <p className='text-white'>https://twitter.com/</p>
                        <TextInput
                            id="twitter"
                            type="text"
                            className="mt-1 block w-full"
                            value={data.twitter}
                            onChange={(e) => setData('twitter', e.target.value)}
                        />
                    </div>

                    <InputError className="mt-2" message={errors.twitter} />
                </div>
                <div>
                    <InputLabel htmlFor="github" value="Github Username" />

                    <div className='flex justify-evenly items-center'>
                        <p className='text-white'>https://github.com/</p>
                        <TextInput
                            id="github"
                            type="text"
                            className="mt-1 block w-full"
                            value={data.github}
                            onChange={(e) => setData('github', e.target.value)}
                        />
                    </div>

                    <InputError className="mt-2" message={errors.github} />
                </div>
                <div>
                    <InputLabel htmlFor="website" value="Website" />

                    <TextInput
                        id="website"
                        type="website"
                        className="mt-1 block w-full p-2"
                        value={data.website}
                        onChange={(e) => setData('website', e.target.value)}
                    />

                    <InputError className="mt-2" message={errors.website} />
                </div>
                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800 dark:text-gray-200">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 font-medium text-sm text-green-600 dark:text-green-400">
                                A new verification link has been sent to your email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enterFrom="opacity-0"
                        leaveTo="opacity-0"
                        className="transition ease-in-out"
                    >
                        <p className="text-sm text-gray-600 dark:text-gray-400">Saved.</p>
                    </Transition>
                </div>
            </form>
        </main>
    );
}
