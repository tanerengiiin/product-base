"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ReloadIcon } from '@radix-ui/react-icons';
import SubmitImageUploader from './SubmitImageUploader';
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import categories from '@/lib/categories';

const formSchema = z.object({
    link: z.string().url({ message: 'Invalid URL' }),
    title: z.string().min(4, {
        message: 'The title must be at least 4 characters.'
    }),
    shortDescription: z.string().min(50, {
        message: 'The text must be at least 50 characters.'
    }).max(150, {
        message: 'The text must be at most 100 characters.'
    }),
    longDescription: z.string().min(100, {
        message: 'The text must be at least 100 characters.'
    }).max(500, {
        message: 'The text must be at most 500 characters.'
    }),
    category: z.string({
        required_error: "Please select a category.",
    }),
})

interface SubmitFormData {
    id: string;
    link: string;
    title: string;
    category: string;
    shortDescription: string;
    longDescription: string;
    coverImage: string;
    detailedImages: string[];
}
interface Props {
    isEdit?: boolean;
    formData?: SubmitFormData;
    onEdit?: (formData: SubmitFormData) => void;
}
const SubmitForm = (props: Props) => {
    const { isEdit = false, formData, onEdit } = props;
    const [loading, setLoading] = useState(false);
    const { data: session, status } = useSession();
    const router = useRouter();
    const [coverImage, setCoverImage] = useState(formData?.coverImage ?? '');
    const [existCoverImage, setExistCoverImage] = useState(true);
    const [detailedImages, setDetailedImages] = useState(formData?.detailedImages ??
        [
            '',
            '',
            '',
            '',
        ])
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            link: formData?.link ?? "",
            title: formData?.title ?? "",
            shortDescription: formData?.shortDescription ?? "",
            longDescription: formData?.longDescription ?? "",
            category: formData?.category ?? '',
        },
    })
    if (status === "loading") {
        return <p>Loading...</p>
    }
    if (status === "unauthenticated") {
        router.push('/auth/login')
        return <p>Access Denied</p>
    }
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        if (onEdit) {
            onEdit({
                id: formData?.id ?? '',
                link: values.link,
                title: values.title,
                category: values.category,
                shortDescription: values.shortDescription,
                longDescription: values.longDescription,
                coverImage: coverImage,
                detailedImages: detailedImages,
            })
        }
        console.log(values)
    }
    return (
        <div className={`${isEdit ? 'pt-2 pb-4' : 'py-10 lg:py-20'} max-w-[660px] mx-auto`}>
            {!isEdit && <div className='mb-8'>
                <h2 className="text-2xl font-semibold text-primary">Submit your product</h2>
                <p className='text-sm text-primary mt-2'>Don&apos;t forget to describe the product in detail.</p>
            </div>}
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="link"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Link</FormLabel>
                                <FormControl>
                                    <Input placeholder="https://..." {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is the link of your product.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="My Product" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is the title of your product.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Category</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant="outline"
                                                role="combobox"
                                                className={cn(
                                                    "max-w-[280px] justify-between",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value
                                                    ? categories.find(
                                                        (category) => category.value === field.value
                                                    )?.label
                                                    : "Select category"}
                                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="max-w-[280px] p-0">
                                        <Command>
                                            <CommandInput placeholder="Search category..." />
                                            <CommandEmpty>No category found.</CommandEmpty>
                                            <CommandGroup className='max-h-[200px] overflow-auto'>
                                                {categories.map((category) => (
                                                    <CommandItem
                                                        value={category.label}
                                                        key={category.value}
                                                        onSelect={() => {
                                                            form.setValue("category", category.value)
                                                        }}
                                                    >
                                                        <Check
                                                            className={cn(
                                                                "mr-2 h-4 w-4",
                                                                category.value === field.value
                                                                    ? "opacity-100"
                                                                    : "opacity-0"
                                                            )}
                                                        />
                                                        {category.label}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                                <FormDescription>
                                    This is your product&apos;s category.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="shortDescription"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Short Description</FormLabel>
                                <FormControl>
                                    <Textarea rows={8} placeholder="Write a brief description about the product..." {...field} />
                                </FormControl>
                                <FormDescription>
                                    The text that will appear on the product card.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="longDescription"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Long Description</FormLabel>
                                <FormControl>
                                    <Textarea rows={20} placeholder="Write a detailed description about the product..." {...field} />
                                </FormControl>
                                <FormDescription>
                                    The text that will appear on the product&apos;s detail page.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormItem>
                        <FormLabel>Cover Image</FormLabel>
                        <FormControl>
                            <SubmitImageUploader image={coverImage} onChangeImage={(val) => setCoverImage(val)} />
                        </FormControl>
                        <FormDescription>
                            This image is also the cover image of the product.
                        </FormDescription>
                    </FormItem>
                    <FormItem>
                        <FormLabel>Detailed Images</FormLabel>
                        <FormControl>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                {detailedImages.map((val, i) => (
                                    <SubmitImageUploader key={i} image={val}
                                        onChangeImage={(val) => setDetailedImages(prev => {
                                            const newImages = [...prev];
                                            newImages[i] = val;
                                            return newImages;
                                        })} />
                                ))}
                            </div>
                        </FormControl>
                        <FormDescription>
                            Detailed images about the product. 0 or 4.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                    <Button disabled={loading} type="submit">
                        {loading ? <>
                            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                        </> : (isEdit ? 'Save Changes' : 'Submit')}
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export type {SubmitFormData};

export default SubmitForm