import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface RapidVerificationProps {
    title: string;
    description: string;
    action: any;
}

export function RapidVerification({
    title,
    description,
    action
}: RapidVerificationProps) {
    return (
        <Card className="border ">
            <CardHeader>
                <CardTitle className="text-[#131A1E]">{title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 flex">
                <Input placeholder='Digite o NIF'/>
                <Button
                    className=" bg-orange-600 hover:bg-orange-700 text-white"
                    size="lg">
                    {action}
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </CardContent>
        </Card>
    );
}
